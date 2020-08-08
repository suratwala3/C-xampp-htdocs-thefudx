<?php

namespace App\Http\Controllers;

use App\Orderstatus;
use App\PaymentGateway;
use App\Setting;
use App\Translation;
use App\User;
use Artisan;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Ixudra\Curl\Facades\Curl;
use Zipper;

class UpdateController extends Controller
{
    /**
     * @param Request $request
     */
    public function updateFoodomaa(Request $request)
    {
        /*Version Info */
        $versionFile = File::get(base_path('version.txt'));
        if ($versionFile) {
            $versionMsg = 'Current Version: ' . $versionFile;
        } else {
            $versionMsg = null;
        }

        return view('admin.updateFoodomaa', array(
            'versionMsg' => $versionMsg,
        ));
    }

    /**
     * @param Request $request
     */
    public function uploadUpdateZipFile(Request $request)
    {
        // dd($request->all());
        //take the zip file and save it inside the tmp folder
        $file = $request->file('file');

        try {
            $destinationPath = base_path('tmp');

            $originalFile = $file->getClientOriginalName();
            //moving file to /tmp folder for installation
            $file->move($destinationPath, $originalFile);
            $response = [
                'success' => true,
            ];
            return response()->json($response);
        } catch (Exception $e) {
            $response = [
                'success' => false,
                'message' => $e->getMessage(),
            ];
            return response()->json($response, 401);
        }

    }

    /**
     * @param Request $request
     */
    public function updateFoodomaaNow()
    {
        //check if UPLOAD-THIS.zip file is present in /tmp folder
        try {
            $updateFile = base_path('tmp/UPLOAD-THIS.zip');
            $checkIfExists = File::get($updateFile);
            //if it is present then continue, else error message exception

            //take the zip and extract to base folder
            $zipper = new Zipper;
            $zipper = Zipper::make($updateFile);
            $zipper->extractTo(base_path());

            // TODO
            //after extraction, run the post install (fix-update-issues script)
            $this->fixUpdateIssues();
            // END TODO
            //redirect with success
            return redirect()->route('admin.updateFoodomaa')->with(['success' => 'Update Successful']);

        } catch (\Illuminate\Contracts\Filesystem\FileNotFoundException $e) {
            //redirect with file not found
            return redirect()->route('admin.updateFoodomaa')->with(['message' => 'Update File Not Found']);

        }

    }

    private function fixUpdateIssues()
    {
        try {
            // ** MIGRATE ** //
            //first migrate the db if any new db are avaliable...
            Artisan::call('migrate', [
                '--force' => true,
            ]);
            // ** MIGRATE END ** //

            // ** SETTINGS ** //
            // get the latest settings json file from the server...
			$data = base64_decode('Wwp7ImtleSI6InN0b3JlQ29sb3IiLCJ2YWx1ZSI6IiNmYzgwMTkifSwKeyJrZXkiOiJzcGxhc2hMb2dvIiwidmFsdWUiOiJzcGxhc2guanBnIn0sCnsia2V5IjoiZmlyc3RTY3JlZW5IZWFkaW5nIiwidmFsdWUiOiJPcmRlciBmcm9tIHRvcCAmIGZhdm91cml0ZSByZXN0YXVyYW50cyJ9LAp7ImtleSI6ImZpcnN0U2NyZWVuU3ViSGVhZGluZyIsInZhbHVlIjoiUmVhZHkgdG8gc2VlIHRvcCByZXN0YXVyYW50IHRvIG9yZGVyPyJ9LAp7ImtleSI6ImZpcnN0U2NyZWVuU2V0dXBMb2NhdGlvbiIsInZhbHVlIjoic2V0dXAgeW91ciBsb2NhdGlvbiJ9LAp7ImtleSI6ImZpcnN0U2NyZWVuTG9naW5UZXh0IiwidmFsdWUiOiJIYXZlIGFuIGFjY291bnQ/In0sCnsia2V5IjoiZm9vdGVyTmVhcm1lIiwidmFsdWUiOiJOZWFyIE1lIn0sCnsia2V5IjoiZm9vdGVyRXhwbG9yZSIsInZhbHVlIjoiRXhwbG9yZSJ9LAp7ImtleSI6ImZvb3RlckNhcnQiLCJ2YWx1ZSI6IkNhcnQifSwKeyJrZXkiOiJmb290ZXJBY2NvdW50IiwidmFsdWUiOiJBY2NvdW50In0sCnsia2V5IjoicmVzdGF1cmFudENvdW50VGV4dCIsInZhbHVlIjoiUmVzdGF1cmFudHMgTmVhciBZb3UifSwKeyJrZXkiOiJzZWFyY2hBcmVhUGxhY2Vob2xkZXIiLCJ2YWx1ZSI6IlNlYXJjaCB5b3VyIGFyZWEuLi4ifSwKeyJrZXkiOiJzZWFyY2hQb3B1bGFyUGxhY2VzIiwidmFsdWUiOiJQb3B1bGFyIFBsYWNlcyJ9LAp7ImtleSI6InJlY29tbWVuZGVkQmFkZ2VUZXh0IiwidmFsdWUiOiJSZWNvbW1lbmRlZCJ9LAp7ImtleSI6InJlY29tbWVuZGVkQmFkZ2VDb2xvciIsInZhbHVlIjoiI2Q1M2Q0YyJ9LAp7ImtleSI6InBvcHVsYXJCYWRnZVRleHQiLCJ2YWx1ZSI6IlBvcHVsYXIifSwKeyJrZXkiOiJwb3B1bGFyQmFkZ2VDb2xvciIsInZhbHVlIjoiI2ZmNTcyMiJ9LAp7ImtleSI6Im5ld0JhZGdlVGV4dCIsInZhbHVlIjoiTmV3In0sCnsia2V5IjoibmV3QmFkZ2VDb2xvciIsInZhbHVlIjoiIzIxOTZGMyJ9LAp7ImtleSI6ImN1cnJlbmN5Rm9ybWF0IiwidmFsdWUiOiIkIn0sCnsia2V5IjoiY3VycmVuY3lJZCIsInZhbHVlIjoiVVNEIn0sCnsia2V5IjoiY2FydENvbG9yQmciLCJ2YWx1ZSI6IiM2MGIyNDYifSwKeyJrZXkiOiJjYXJ0Q29sb3JUZXh0IiwidmFsdWUiOiIjZmZmZmZmIn0sCnsia2V5IjoiY2FydEVtcHR5VGV4dCIsInZhbHVlIjoiWW91ciBDYXJ0IGlzIEVtcHR5In0sCnsia2V5IjoiZmlyc3RTY3JlZW5IZXJvSW1hZ2UiLCJ2YWx1ZSI6ImFzc2V0c1wvaW1nXC92YXJpb3VzXC8xNTY2NjI4MTk5MzlselIzZ0IyaS5wbmcifSwKeyJrZXkiOiJyZXN0YXVyYW50U2VhcmNoUGxhY2Vob2xkZXIiLCJ2YWx1ZSI6IlNlYXJjaCBmb3IgcmVzdGF1cmFudHMgYW5kIGl0ZW1zLi4uIn0sCnsia2V5IjoiYWNjb3VudE1hbmFnZUFkZHJlc3MiLCJ2YWx1ZSI6Ik1hbmFnZSBBZGRyZXNzIn0sCnsia2V5IjoiYWNjb3VudE15T3JkZXJzIiwidmFsdWUiOiJNeSBPcmRlcnMifSwKeyJrZXkiOiJhY2NvdW50SGVscEZhcSIsInZhbHVlIjoiSGVscCAmIEZBUXMifSwKeyJrZXkiOiJhY2NvdW50TG9nb3V0IiwidmFsdWUiOiJMb2dvdXQifSwKeyJrZXkiOiJjYXJ0TWFrZVBheW1lbnQiLCJ2YWx1ZSI6Ik1ha2UgUGF5bWVudCJ9LAp7ImtleSI6ImNhcnRMb2dpbkhlYWRlciIsInZhbHVlIjoiQWxtb3N0IFRoZXJlIn0sCnsia2V5IjoiY2FydExvZ2luU3ViSGVhZGVyIiwidmFsdWUiOiJMb2dpbiBvciBTaWdudXAgdG8gcGxhY2UgeW91ciBvcmRlciJ9LAp7ImtleSI6ImNhcnRMb2dpbkJ1dHRvblRleHQiLCJ2YWx1ZSI6IkNvbnRpbnVlIn0sCnsia2V5IjoiY2FydERlbGl2ZXJUbyIsInZhbHVlIjoiRGVsaXZlciBUbyJ9LAp7ImtleSI6ImNhcnRDaGFuZ2VMb2NhdGlvbiIsInZhbHVlIjoiQ2hhbmdlIn0sCnsia2V5IjoiYnV0dG9uTmV3QWRkcmVzcyIsInZhbHVlIjoiTmV3IEFkZHJlc3MifSwKeyJrZXkiOiJidXR0b25TYXZlQWRkcmVzcyIsInZhbHVlIjoiU2F2ZSBBZGRyZXNzIn0sCnsia2V5IjoiZWRpdEFkZHJlc3NBZGRyZXNzIiwidmFsdWUiOiJGbGF0L0FwYXJ0bWVudCBOdW1iZXIifSwKeyJrZXkiOiJlZGl0QWRkcmVzc0hvdXNlIiwidmFsdWUiOiJIb3VzZSBcLyBGbGF0IE5vLiJ9LAp7ImtleSI6ImVkaXRBZGRyZXNzTGFuZG1hcmsiLCJ2YWx1ZSI6IkxhbmRtYXJrIn0sCnsia2V5IjoiZWRpdEFkZHJlc3NUYWciLCJ2YWx1ZSI6IlRhZyJ9LAp7ImtleSI6ImFkZHJlc3NUYWdQbGFjZWhvbGRlciIsInZhbHVlIjoiRWcuIEhvbWUsIFdvcmsifSwKeyJrZXkiOiJjYXJ0QXBwbHlDb3Vwb24iLCJ2YWx1ZSI6IkFwcGx5IENvdXBvbiJ9LAp7ImtleSI6ImNhcnRJbnZhbGlkQ291cG9uIiwidmFsdWUiOiJJbnZhbGlkIENvdXBvbiJ9LAp7ImtleSI6ImNhcnRTdWdnZXN0aW9uUGxhY2Vob2xkZXIiLCJ2YWx1ZSI6IlN1Z2dlc3Rpb24gZm9yIHRoZSByZXN0YXVyYW50Li4uIn0sCnsia2V5IjoiZWRpdEFkZHJlc3NUZXh0IiwidmFsdWUiOiJFZGl0In0sCnsia2V5IjoiZGVsZXRlQWRkcmVzc1RleHQiLCJ2YWx1ZSI6IkRlbGV0ZSJ9LAp7ImtleSI6Im5vQWRkcmVzc1RleHQiLCJ2YWx1ZSI6IllvdSBkb24ndCBoYXZlIGFueSBzYXZlZCBhZGRyZXNzZXMuIn0sCnsia2V5IjoiY2FydFNldEFkZHJlc3NUZXh0IiwidmFsdWUiOiJTZXQgWW91ciBBZGRyZXNzIn0sCnsia2V5IjoiY2FydFBhZ2VUaXRsZSIsInZhbHVlIjoiQ2FydCJ9LAp7ImtleSI6ImNoZWNrb3V0UGFnZVRpdGxlIiwidmFsdWUiOiJDaGVja291dCJ9LAp7ImtleSI6ImNoZWNrb3V0UGxhY2VPcmRlciIsInZhbHVlIjoiUGxhY2UgT3JkZXIifSwKeyJrZXkiOiJydW5uaW5nT3JkZXJQbGFjZWRUaXRsZSIsInZhbHVlIjoiT3JkZXIgUGxhY2VkIFN1Y2Nlc3NmdWxseSJ9LAp7ImtleSI6InJ1bm5pbmdPcmRlclBsYWNlZFN1YiIsInZhbHVlIjoiV2FpdGluZyBmb3IgdGhlIHJlc3RhdXJhbnQgdG8gY29uZmlybSB5b3VyIG9yZGVyIn0sCnsia2V5IjoicnVubmluZ09yZGVyUHJlcGFyaW5nVGl0bGUiLCJ2YWx1ZSI6IkNoZWYgYXQgd29yayEhIn0sCnsia2V5IjoicnVubmluZ09yZGVyUHJlcGFyaW5nU3ViIiwidmFsdWUiOiJSZXN0YXVyYW50IGlzIHByZXBhcmluZyB5b3VyIG9yZGVyIn0sCnsia2V5IjoicnVubmluZ09yZGVyT253YXlUaXRsZSIsInZhbHVlIjoiVnJvb20gVnJvb20hISJ9LAp7ImtleSI6InJ1bm5pbmdPcmRlck9ud2F5U3ViIiwidmFsdWUiOiJPcmRlciBoYXMgYmVlbiBwaWNrZWQgdXAgYW5kIGlzIG9uIGl0cyB3YXkifSwKeyJrZXkiOiJydW5uaW5nT3JkZXJSZWZyZXNoQnV0dG9uIiwidmFsdWUiOiJSZWZyZXNoIE9yZGVyIFN0YXR1cyJ9LAp7ImtleSI6Im5vT3JkZXJzVGV4dCIsInZhbHVlIjoiWW91IGhhdmUgbm90IHBsYWNlZCBhbnkgb3JkZXIgeWV0LiJ9LAp7ImtleSI6Im9yZGVyVGV4dFRvdGFsIiwidmFsdWUiOiJUb3RhbDoifSwKeyJrZXkiOiJjaGVja291dFBheW1lbnRMaXN0VGl0bGUiLCJ2YWx1ZSI6IlNlbGVjdCB5b3VyIHByZWZlcmVkIHBheW1lbnQgbWV0aG9kIn0sCnsia2V5IjoiY2hlY2tvdXRTZWxlY3RQYXltZW50IiwidmFsdWUiOiJTZWxlY3QgUGF5bWVudCBNZXRob2QifSwKeyJrZXkiOiJtYXBBcGlLZXkiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5Ijoic3RvcmVOYW1lIiwidmFsdWUiOiJGb29kb21hIiwiY3JlYXRlZF9hdCI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMTktMDgtMDEgMDc6Mjk6NDYifSwKeyJrZXkiOiJzdG9yZUxvZ28iLCJ2YWx1ZSI6ImxvZ28ucG5nIn0sCnsia2V5IjoicnVubmluZ09yZGVyRGVsaXZlcnlBc3NpZ25lZFRpdGxlIiwidmFsdWUiOiJEZWxpdmVyeSBHdXkgQXNzaWduZWQifSwKeyJrZXkiOiJydW5uaW5nT3JkZXJEZWxpdmVyeUFzc2lnbmVkU3ViIiwidmFsdWUiOiJPbiB0aGUgd2F5IHRvIHBpY2sgdXAgeW91ciBvcmRlci4ifSwKeyJrZXkiOiJydW5uaW5nT3JkZXJDYW5jZWxlZFRpdGxlIiwidmFsdWUiOiJPcmRlciBDYW5jZWxlZCJ9LAp7ImtleSI6InJ1bm5pbmdPcmRlckNhbmNlbGVkU3ViIiwidmFsdWUiOiJTb3JyeS4gWW91ciBvcmRlciBoYXMgYmVlbiBjYW5jZWxlZC4ifSwKeyJrZXkiOiJzdHJpcGVQdWJsaWNLZXkiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5Ijoic3RyaXBlU2VjcmV0S2V5IiwidmFsdWUiOm51bGx9LAp7ImtleSI6ImZpcnN0U2NyZWVuV2VsY29tZU1lc3NhZ2UiLCJ2YWx1ZSI6IldlbGNvbWUsIn0sCnsia2V5IjoiZmlyc3RTY3JlZW5Mb2dpbkJ0biIsInZhbHVlIjoiTG9naW4ifSwKeyJrZXkiOiJsb2dpbkVycm9yTWVzc2FnZSIsInZhbHVlIjoiV29vcHNzISEgU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uIn0sCnsia2V5IjoicGxlYXNlV2FpdFRleHQiLCJ2YWx1ZSI6IlBsZWFzZSBXYWl0Li4uIn0sCnsia2V5IjoibG9naW5Mb2dpblRpdGxlIiwidmFsdWUiOiJMT0dJTiJ9LAp7ImtleSI6ImxvZ2luTG9naW5TdWJUaXRsZSIsInZhbHVlIjoiRW50ZXIgeW91ciBlbWFpbCBhbmQgcGFzc3dvcmQifSwKeyJrZXkiOiJsb2dpbkxvZ2luRW1haWxMYWJlbCIsInZhbHVlIjoiRW1haWwifSwKeyJrZXkiOiJsb2dpbkxvZ2luUGFzc3dvcmRMYWJlbCIsInZhbHVlIjoiUGFzc3dvcmQifSwKeyJrZXkiOiJob21lUGFnZU1pbnNUZXh0IiwidmFsdWUiOiJNSU5TIn0sCnsia2V5IjoiaG9tZVBhZ2VGb3JUd29UZXh0IiwidmFsdWUiOiJGT1IgVFdPIn0sCnsia2V5IjoiaXRlbXNQYWdlUmVjb21tZW5kZWRUZXh0IiwidmFsdWUiOiJSRUNPTU1FTkRFRCJ9LAp7ImtleSI6ImZsb2F0Q2FydEl0ZW1zVGV4dCIsInZhbHVlIjoiSXRlbXMifSwKeyJrZXkiOiJmbG9hdENhcnRWaWV3Q2FydFRleHQiLCJ2YWx1ZSI6IlZpZXcgQ2FydCJ9LAp7ImtleSI6ImNhcnRJdGVtc0luQ2FydFRleHQiLCJ2YWx1ZSI6Ikl0ZW1zIGluIENhcnQifSwKeyJrZXkiOiJjYXJ0QmlsbERldGFpbHNUZXh0IiwidmFsdWUiOiJCaWxsIERldGFpbHMifSwKeyJrZXkiOiJjYXJ0SXRlbVRvdGFsVGV4dCIsInZhbHVlIjoiSXRlbSBUb3RhbCJ9LAp7ImtleSI6ImNhcnRSZXN0YXVyYW50Q2hhcmdlcyIsInZhbHVlIjoiUmVzdGF1cmFudCBDaGFyZ2VzIn0sCnsia2V5IjoiY2FydERlbGl2ZXJ5Q2hhcmdlcyIsInZhbHVlIjoiRGVsaXZlcnkgQ2hhcmdlcyJ9LAp7ImtleSI6ImNhcnRDb3Vwb25UZXh0IiwidmFsdWUiOiJDb3Vwb24ifSwKeyJrZXkiOiJjYXJ0VG9QYXlUZXh0IiwidmFsdWUiOiJUbyBQYXkifSwKeyJrZXkiOiJjYXJ0U2V0WW91ckFkZHJlc3MiLCJ2YWx1ZSI6IlNldCBZb3VyIEFkZHJlc3MifSwKeyJrZXkiOiJjaGVja291dFBheW1lbnRJblByb2Nlc3MiLCJ2YWx1ZSI6IlBheW1lbnQgaW4gcHJvY2Vzcy4gRG8gbm90IGhpdCByZWZyZXNoIG9yIGdvIGJhY2suIn0sCnsia2V5IjoiY2hlY2tvdXRTdHJpcGVUZXh0IiwidmFsdWUiOiJTdHJpcGUifSwKeyJrZXkiOiJjaGVja291dFN0cmlwZVN1YlRleHQiLCJ2YWx1ZSI6Ik9ubGluZSBQYXltZW50In0sCnsia2V5IjoiY2hlY2tvdXRDb2RUZXh0IiwidmFsdWUiOiJDT0QifSwKeyJrZXkiOiJjaGVja291dENvZFN1YlRleHQiLCJ2YWx1ZSI6IkNhc2ggT24gRGVsaXZlcnkifSwKeyJrZXkiOiJzaG93UHJvbW9TbGlkZXIiLCJ2YWx1ZSI6ImZhbHNlIn0sCnsia2V5IjoibG9naW5Mb2dpblBob25lTGFiZWwiLCJ2YWx1ZSI6IlBob25lIn0sCnsia2V5IjoibG9naW5Mb2dpbk5hbWVMYWJlbCIsInZhbHVlIjoiTmFtZSJ9LAp7ImtleSI6InJlZ2lzdGVyRXJyb3JNZXNzYWdlIiwidmFsdWUiOiJXb3Bwc3MhISBTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4ifSwKeyJrZXkiOiJyZWdpc3RlclJlZ2lzdGVyVGl0bGUiLCJ2YWx1ZSI6IlJlZ2lzdGVyIn0sCnsia2V5IjoicmVnaXN0ZXJSZWdpc3RlclN1YlRpdGxlIiwidmFsdWUiOiJSZWdzaXRlciBub3cgZm9yIGZyZWUifSwKeyJrZXkiOiJmaXJzdFNjcmVlblJlZ2lzdGVyQnRuIiwidmFsdWUiOiJSZWdpc3RlciJ9LAp7ImtleSI6ImxvZ2luRG9udEhhdmVBY2NvdW50IiwidmFsdWUiOiJEb24ndCBoYXZlIGFuIGFjY291bnQgeWV0PyAifSwKeyJrZXkiOiJyZWdzaXRlckFscmVhZHlIYXZlQWNjb3VudCIsInZhbHVlIjoiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/ICJ9LAp7ImtleSI6ImZhdmljb24tMTZ4MTYiLCJ2YWx1ZSI6ImZhdmljb24tMTZ4MTYucG5nIn0sCnsia2V5IjoiZmF2aWNvbi0zMngzMiIsInZhbHVlIjoiZmF2aWNvbi0zMngzMi5wbmcifSwKeyJrZXkiOiJmYXZpY29uLTk2eDk2IiwidmFsdWUiOiJmYXZpY29uLTk2eDk2LnBuZyJ9LAp7ImtleSI6ImZhdmljb24tMTI4eDEyOCIsInZhbHVlIjoiZmF2aWNvbi0xMjh4MTI4LnBuZyJ9LAp7ImtleSI6InN0b3JlRW1haWwiLCJ2YWx1ZSI6ImNhcmVAc3RvcmUuY29tIn0sCnsia2V5Ijoic2VvTWV0YVRpdGxlIiwidmFsdWUiOm51bGx9LAp7ImtleSI6InNlb01ldGFEZXNjcmlwdGlvbiIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJzdG9yZVVybCIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJ0d2l0dGVyVXNlcm5hbWUiLCJ2YWx1ZSI6InR3aXR0ZXItdXNlcm5hbWUifSwKeyJrZXkiOiJzZW9PZ1RpdGxlIiwidmFsdWUiOm51bGx9LAp7ImtleSI6InNlb09nRGVzY3JpcHRpb24iLCJ2YWx1ZSI6bnVsbH0sCnsia2V5Ijoic2VvVHdpdHRlclRpdGxlIiwidmFsdWUiOm51bGx9LAp7ImtleSI6InNlb1R3aXR0ZXJEZXNjcmlwdGlvbiIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJzZW9PZ0ltYWdlIiwidmFsdWUiOm51bGx9LAp7ImtleSI6InNlb1R3aXR0ZXJJbWFnZSIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJhY2NvdW50TXlBY2NvdW50IiwidmFsdWUiOiJNeSBBY2NvdW50In0sCnsia2V5IjoiZGVza3RvcEhlYWRpbmciLCJ2YWx1ZSI6Ik9yZGVyIGZyb20gcmVzdGF1cmFudHMgbmVhciB5b3UifSwKeyJrZXkiOiJkZXNrdG9wU3ViSGVhZGluZyIsInZhbHVlIjoiRWFzeSB3YXkgdG8gZ2V0IHRoZSBmb29kIHlvdSBsb3ZlIGRlbGl2ZXJlZC5cclxuV2UgYnJpbmcgZm9vZCBmcm9tIHRoZSBiZXN0IHJlc3RhdXJhbnRzIGFuZCBkZXNzZXJ0cyB0byB5b3VyIGRvb3JzdGVwLiBXZSBoYXZlIDxiIHN0eWxlPVwiXCI+aHVuZHJlZHM8XC9iPiBvZiByZXN0YXVyYW50cyB0byBjaG9vc2UgZnJvbS4ifSwKeyJrZXkiOiJkZXNrdG9wVXNlQXBwQnV0dG9uIiwidmFsdWUiOiJVc2UgQXBwIn0sCnsia2V5IjoiZGVza3RvcEFjaGlldmVtZW50T25lVGl0bGUiLCJ2YWx1ZSI6IlJlc3RhdXJhbnRzIn0sCnsia2V5IjoiZGVza3RvcEFjaGlldmVtZW50T25lU3ViIiwidmFsdWUiOiIyMzAwKyJ9LAp7ImtleSI6ImRlc2t0b3BBY2hpZXZlbWVudFR3b1RpdGxlIiwidmFsdWUiOiJJdGVtcyJ9LAp7ImtleSI6ImRlc2t0b3BBY2hpZXZlbWVudFR3b1N1YiIsInZhbHVlIjoiNjUwMDArIn0sCnsia2V5IjoiZGVza3RvcEFjaGlldmVtZW50VGhyZWVUaXRsZSIsInZhbHVlIjoiQ3VzdG9tZXJzIn0sCnsia2V5IjoiZGVza3RvcEFjaGlldmVtZW50VGhyZWVTdWIiLCJ2YWx1ZSI6IjFNKyJ9LAp7ImtleSI6ImRlc2t0b3BBY2hpZXZlbWVudEZvdXJUaXRsZSIsInZhbHVlIjoiRGVsaXZlcmllcyJ9LAp7ImtleSI6ImRlc2t0b3BBY2hpZXZlbWVudEZvdXJTdWIiLCJ2YWx1ZSI6IjVNKyJ9LAp7ImtleSI6ImRlc2t0b3BTb2NpYWxGYWNlYm9va0xpbmsiLCJ2YWx1ZSI6Imh0dHBzOlwvXC93d3cuZmFjZWJvb2suY29tIn0sCnsia2V5IjoiZGVza3RvcFNvY2lhbEdvb2dsZUxpbmsiLCJ2YWx1ZSI6Imh0dHBzOlwvXC93d3cuZ29vZ2xlLmNvbSJ9LAp7ImtleSI6ImRlc2t0b3BTb2NpYWxZb3V0dWJlTGluayIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJkZXNrdG9wU29jaWFsSW5zdGFncmFtTGluayIsInZhbHVlIjoiaHR0cHM6XC9cL3d3dy5pbnN0YWdyYW0uY29tIn0sCnsia2V5IjoiZGVza3RvcEZvb3RlclNvY2lhbEhlYWRlciIsInZhbHVlIjoiV2UgQXJlIFNvY2lhbCJ9LAp7ImtleSI6ImRlc2t0b3BGb290ZXJBZGRyZXNzIiwidmFsdWUiOiIjMTIwMSwgU29tZXBsYWNlLCBOZWFyIFNvbWV3aGVyZSJ9LAp7ImtleSI6InJ1bm5pbmdPcmRlckRlbGl2ZXJ5UGluIiwidmFsdWUiOiJEZWxpdmVyeSBQaW46ICJ9LAp7ImtleSI6ImRlbGl2ZXJ5Tm9PcmRlcnNBY2NlcHRlZCIsInZhbHVlIjoiTm8gT3JkZXJzIEFjY2VwdGVkIFlldCJ9LAp7ImtleSI6ImRlbGl2ZXJ5Tm9OZXdPcmRlcnMiLCJ2YWx1ZSI6Ik5vIE5ldyBPcmRlcnMgWWV0In0sCnsia2V5IjoiZmlyc3RTY3JlZW5IZXJvSW1hZ2VTbSIsInZhbHVlIjoiYXNzZXRzXC9pbWdcL3ZhcmlvdXNcLzE1NjY2MjgxOTkzOWx6UjNnQjJpLXNtLnBuZyJ9LAp7ImtleSI6InNob3dNYXAiLCJ2YWx1ZSI6ImZhbHNlIn0sCnsia2V5IjoicGF5cGFsRW52IiwidmFsdWUiOiJzYW5kYm94In0sCnsia2V5IjoicGF5cGFsU2FuZGJveEtleSIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJwYXlwYWxQcm9kdWN0aW9uS2V5IiwidmFsdWUiOm51bGx9LAp7ImtleSI6ImVuYWJsZVB1c2hOb3RpZmljYXRpb24iLCJ2YWx1ZSI6ImZhbHNlIn0sCnsia2V5IjoiZW5hYmxlUHVzaE5vdGlmaWNhdGlvbk9yZGVycyIsInZhbHVlIjoiZmFsc2UifSwKeyJrZXkiOiJmaXJlYmFzZVNlbmRlcklkIiwidmFsdWUiOiI1ODc2NTYwNjgzMzMifSwKeyJrZXkiOiJmaXJlYmFzZVNlY3JldCIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJydW5uaW5nT3JkZXJEZWxpdmVyZWQiLCJ2YWx1ZSI6Ik9yZGVyIERlbGl2ZXJlZCJ9LAp7ImtleSI6InJ1bm5pbmdPcmRlckRlbGl2ZXJlZFN1YiIsInZhbHVlIjoiVGhlIG9yZGVyIGhhcyBiZWVuIGRlbGl2ZXJlZCB0byB5b3UuIEVuam95LiJ9LAp7ImtleSI6InNob3dHZHByIiwidmFsdWUiOiJmYWxzZSJ9LAp7ImtleSI6ImdkcHJNZXNzYWdlIiwidmFsdWUiOiJXZSB1c2UgQ29va2llcyB0byBnaXZlIHlvdSB0aGUgYmVzdCBwb3NzaWJsZSBzZXJ2aWNlLiBCeSBjb250aW51aW5nIHRvIGJyb3dzZSBvdXIgc2l0ZSB5b3UgYXJlIGFncmVlaW5nIHRvIG91ciB1c2Ugb2YgQ29va2llcyJ9LAp7ImtleSI6ImdkcHJDb25maXJtQnV0dG9uIiwidmFsdWUiOiJPa2F5In0sCnsia2V5IjoicmVzdGF1cmFudEZlYXR1cmVkVGV4dCIsInZhbHVlIjoiRmVhdHVyZWQifSwKeyJrZXkiOiJkZWxpdmVyeU5ld09yZGVyc1RpdGxlIiwidmFsdWUiOiJOZXcgT3JkZXJzIn0sCnsia2V5IjoiZGVsaXZlcnlBY2NlcHRlZE9yZGVyc1RpdGxlIiwidmFsdWUiOiJBY2NlcHRlZCBPcmRlcnMifSwKeyJrZXkiOiJkZWxpdmVyeVdlbGNvbWVNZXNzYWdlIiwidmFsdWUiOiJXZWxjb21lIn0sCnsia2V5IjoiZGVsaXZlcnlPcmRlckl0ZW1zIiwidmFsdWUiOiJPcmRlciBJdGVtcyJ9LAp7ImtleSI6ImRlbGl2ZXJ5UmVzdGF1cmFudEFkZHJlc3MiLCJ2YWx1ZSI6IlJlc3RhdXJhbnQgQWRkcmVzcyJ9LAp7ImtleSI6ImRlbGl2ZXJ5R2V0RGlyZWN0aW9uQnV0dG9uIiwidmFsdWUiOiJHZXQgRGlyZWN0aW9uIn0sCnsia2V5IjoiZGVsaXZlcnlEZWxpdmVyeUFkZHJlc3MiLCJ2YWx1ZSI6IkRlbGl2ZXJ5IEFkZHJlc3MifSwKeyJrZXkiOiJkZWxpdmVyeU9ubGluZVBheW1lbnQiLCJ2YWx1ZSI6Ik9ubGluZSBQYXltZW50In0sCnsia2V5IjoiZGVsaXZlcnlEZWxpdmVyeVBpblBsYWNlaG9sZGVyIiwidmFsdWUiOiJFTlRFUiBERUxJVkVSWSBQSU4ifSwKeyJrZXkiOiJkZWxpdmVyeUFjY2VwdE9yZGVyQnV0dG9uIiwidmFsdWUiOiJBY2NlcHQifSwKeyJrZXkiOiJkZWxpdmVyeVBpY2tlZFVwQnV0dG9uIiwidmFsdWUiOiJQaWNrZWQgVXAifSwKeyJrZXkiOiJkZWxpdmVyeURlbGl2ZXJlZEJ1dHRvbiIsInZhbHVlIjoiRGVsaXZlcmVkIn0sCnsia2V5IjoiZGVsaXZlcnlPcmRlckNvbXBsZXRlZEJ1dHRvbiIsInZhbHVlIjoiT3JkZXIgQ29tcGxldGVkIn0sCnsia2V5IjoiZGVsaXZlcnlJbnZhbGlkRGVsaXZlcnlQaW4iLCJ2YWx1ZSI6IkluY29ycmVjdCBkZWxpdmVyeSBwaW4uIFBsZWFzZSB0cnkgYWdhaW4uIn0sCnsia2V5IjoiZGVsaXZlcnlBbHJlYWR5QWNjZXB0ZWQiLCJ2YWx1ZSI6IlRoaXMgZGVsaXZlcnkgaGFzIGJlZW4gYWNjZXB0ZWQgYnkgc29tZW9uZSBlbHNlLiJ9LAp7ImtleSI6ImRlbGl2ZXJ5TG9nb3V0RGVsaXZlcnkiLCJ2YWx1ZSI6IkxvZ291dCBEZWxpdmVyeSJ9LAp7ImtleSI6ImVuYWJsZUdvb2dsZUFuYWx5dGljcyIsInZhbHVlIjoiZmFsc2UifSwKeyJrZXkiOiJnb29nbGVBbmFseXRpY3NJZCIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJ0YXhBcHBsaWNhYmxlIiwidmFsdWUiOiJmYWxzZSJ9LAp7ImtleSI6InRheFBlcmNlbnRhZ2UiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5IjoiZmlyZWJhc2VQdWJsaWMiLCJ2YWx1ZSI6IkJINUw4WHJHc05wa2k1dUYxMDA4RmJaemdLS1pOLU5taE93ZFdMNUx4aDVyM25zZ1o2Tl9EZ2VkMUlZWFhDQ0p3cG5yWHpzNTJHX3Yzdk1fbmFPMGh4WSJ9LAp7ImtleSI6ImRlbGl2ZXJ5TG9nb3V0Q29uZmlybWF0aW9uIiwidmFsdWUiOiJBcmUgeW91IHN1cmU/In0sCnsia2V5IjoiY3VzdG9taXphdGlvbkhlYWRpbmciLCJ2YWx1ZSI6IkN1c3RvbWl6YXRpb25zIn0sCnsia2V5IjoiY3VzdG9taXphYmxlSXRlbVRleHQiLCJ2YWx1ZSI6IkN1c3RvbWl6YWJsZSJ9LAp7ImtleSI6ImN1c3RvbWl6YXRpb25Eb25lQnRuVGV4dCIsInZhbHVlIjoiQ29udGludWUifSwKeyJrZXkiOiJwYXlzdGFja1B1YmxpY0tleSIsInZhbHVlIjoicGtfdGVzdF9lY2YzNDk2YmRmMzZiY2VkMjExMmE1MDJmNWY1YmI5NmUxMzQwMTI0In0sCnsia2V5IjoicGF5c3RhY2tQcml2YXRlS2V5IiwidmFsdWUiOm51bGx9LAp7ImtleSI6InBheXN0YWNrUGF5VGV4dCIsInZhbHVlIjoiUEFZIFdJVEggUEFZU0xBQ0sifSwKeyJrZXkiOiJtaW5QYXlvdXQiLCJ2YWx1ZSI6IjE1MCJ9LAp7ImtleSI6ImVuYWJsZUZhY2Vib29rTG9naW4iLCJ2YWx1ZSI6ImZhbHNlIn0sCnsia2V5IjoiZmFjZWJvb2tBcHBJZCIsInZhbHVlIjogbnVsbH0sCnsia2V5IjoiZmFjZWJvb2tMb2dpbkJ1dHRvblRleHQiLCJ2YWx1ZSI6IkxvZ2luIHdpdGggRmFjZWJvb2sifSwKeyJrZXkiOiJlbmFibGVHb29nbGVMb2dpbiIsInZhbHVlIjoiZmFsc2UifSwKeyJrZXkiOiJnb29nbGVBcHBJZCIsInZhbHVlIjogbnVsbH0sCnsia2V5IjoiZ29vZ2xlTG9naW5CdXR0b25UZXh0IiwidmFsdWUiOiJMb2dpbiB3aXRoIEdvb2dsZSJ9LAp7ImtleSI6ImN1c3RvbUNTUyIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJlblNPViIsInZhbHVlIjoiZmFsc2UifSwKeyJrZXkiOiJ0d2lsaW9TaWQiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5IjoidHdpbGlvQWNjZXNzVG9rZW4iLCJ2YWx1ZSI6bnVsbH0sCnsia2V5IjoidHdpbGlvU2VydmljZUlkIiwidmFsdWUiOm51bGx9LAp7ImtleSI6ImZpZWxkVmFsaWRhdGlvbk1zZyIsInZhbHVlIjoiVGhpcyBpcyBhIHJlcXVpcmVkIGZpZWxkLiJ9LAp7ImtleSI6Im5hbWVWYWxpZGF0aW9uTXNnIiwidmFsdWUiOiJQbGVhc2UgZW50ZXIgeW91ciBmdWxsIG5hbWUuIn0sCnsia2V5IjoiZW1haWxWYWxpZGF0aW9uTXNnIiwidmFsdWUiOiJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC4ifSwKeyJrZXkiOiJwaG9uZVZhbGlkYXRpb25Nc2ciLCJ2YWx1ZSI6IlBsZWFzZSBlbnRlciBhIHBob25lIG51bWJlciBpbiB0aGlzIGZvcm1hdDogKzExMjM0NTY3ODkifSwKeyJrZXkiOiJtaW5pbXVtTGVuZ3RoVmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWx1ZSI6IlRoaXMgZmllbGQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZy4ifSwKeyJrZXkiOiJlbWFpbFBob25lQWxyZWFkeVJlZ2lzdGVyZWQiLCJ2YWx1ZSI6IkVtYWlsIG9yIFBob25lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZC4ifSwKeyJrZXkiOiJlbnRlclBob25lVG9WZXJpZnkiLCJ2YWx1ZSI6IlBsZWFzZSBlbnRlciB5b3VyIHBob25lIG51bWJlciB0byB2ZXJpZnkifSwKeyJrZXkiOiJpbnZhbGlkT3RwTXNnIiwidmFsdWUiOiJJbnZhbGlkIE9UUC4gUGxlYXNlIGNoZWNrIGFuZCB0cnkgYWdhaW4uIn0sCnsia2V5Ijoib3RwU2VudE1zZyIsInZhbHVlIjoiQW4gT1RQIGhhcyBiZWVuIHNlbnQgdG8gIn0sCnsia2V5IjoicmVzZW5kT3RwTXNnIiwidmFsdWUiOiJSZXNlbmQgT1RQIHRvICJ9LAp7ImtleSI6InJlc2VuZE90cENvdW50ZG93bk1zZyIsInZhbHVlIjoiUmVzZW5kIE9UUCBpbiAifSwKeyJrZXkiOiJ2ZXJpZnlPdHBCdG5UZXh0IiwidmFsdWUiOiJWZXJpZnkgT1RQIn0sCnsia2V5Ijoic29jaWFsV2VsY29tZVRleHQiLCJ2YWx1ZSI6IkhpICJ9LAp7ImtleSI6ImVtYWlsUGFzc0Rvbm90TWF0Y2giLCJ2YWx1ZSI6IkVtYWlsICYgUGFzc3dvcmQgZG8gbm90IG1hdGNoLiJ9LAp7ImtleSI6ImVuU1BVIiwidmFsdWUiOiJ0cnVlIn0sCnsia2V5IjoicnVubmluZ09yZGVyUmVhZHlGb3JQaWNrdXAiLCJ2YWx1ZSI6IkZvb2QgaXMgUmVhZHkifSwKeyJrZXkiOiJydW5uaW5nT3JkZXJSZWFkeUZvclBpY2t1cFN1YiIsInZhbHVlIjoiWW91ciBvcmRlciBpcyByZWFkeSBmb3Igc2VsZiBwaWNrdXAuIn0sCnsia2V5IjoiZGVsaXZlcnlUeXBlRGVsaXZlcnkiLCJ2YWx1ZSI6IkRlbGl2ZXJ5In0sCnsia2V5IjoiZGVsaXZlcnlUeXBlU2VsZlBpY2t1cCIsInZhbHVlIjoiU2VsZiBQaWNrdXAifSwKeyJrZXkiOiJub1Jlc3RhdXJhbnRNZXNzYWdlIiwidmFsdWUiOiJObyByZXN0YXVyYW50cyBhcmUgYXZhaWxhYmxlLiJ9LAp7ImtleSI6InNlbGVjdGVkU2VsZlBpY2t1cE1lc3NhZ2UiLCJ2YWx1ZSI6IllvdSBoYXZlIHNlbGVjdGVkIFNlbGYgUGlja3VwLiJ9LAp7ImtleSI6InZlaGljbGVUZXh0IiwidmFsdWUiOiJWZWhpY2xlOiJ9LAp7ImtleSI6ImRlbGl2ZXJ5R3V5QWZ0ZXJOYW1lIiwidmFsdWUiOiJpcyB5b3VyIGRlbGl2ZXJ5IHZhbGV0IHRvZGF5LiJ9LAp7ImtleSI6ImNhbGxOb3dCdXR0b24iLCJ2YWx1ZSI6IkNhbGwgTm93In0sCnsia2V5IjoiZW5hYmxlR29vZ2xlQVBJIiwidmFsdWUiOiJmYWxzZSJ9LAp7ImtleSI6ImNoZWNrb3V0UmF6b3JwYXlUZXh0IiwidmFsdWUiOiJSYXpvcnBheSJ9LAp7ImtleSI6ImNoZWNrb3V0UmF6b3JwYXlTdWJUZXh0IiwidmFsdWUiOiJQYXkgd2l0aCBjYXJkcywgd2FsbGV0IG9yIFVQSSJ9LAp7ImtleSI6InJhem9ycGF5S2V5SWQiLCJ2YWx1ZSI6InJ6cF90ZXN0X1ZXY3A4Nm5mVTZUN3JWIn0sCnsia2V5IjoicmF6b3JwYXlLZXlTZWNyZXQiLCJ2YWx1ZSI6ImVMek1CcjFjeWNSRzBpRWpnTXB0Z2pNcyJ9LAp7ImtleSI6ImFsbG93TG9jYXRpb25BY2Nlc3NNZXNzYWdlIiwidmFsdWUiOiJLaW5kbHkgYWxsb3cgbG9jYXRpb24gYWNjZXNzIGZvciBsaXZlIHRyYWNraW5nLiJ9LAp7ImtleSI6ImVuYWJsZURlbGl2ZXJ5UGluIiwidmFsdWUiOiJ0cnVlIn0sCnsia2V5IjoiZGVsaXZlcnlPcmRlcnNSZWZyZXNoQnRuIiwidmFsdWUiOiJSZWZyZXNoIn0sCnsia2V5IjoicmVzdGF1cmFudEFjY2VwdFRpbWVUaHJlc2hvbGQiLCJ2YWx1ZSI6IjEwIn0sCnsia2V5IjoiZGVsaXZlcnlBY2NlcHRUaW1lVGhyZXNob2xkIiwidmFsdWUiOiI0NSJ9LAp7ImtleSI6InRheFRleHQiLCJ2YWx1ZSI6IlRheCJ9LAp7ImtleSI6Iml0ZW1zUmVtb3ZlZE1zZyIsInZhbHVlIjoiSXRlbXMgYWRkZWQgZnJvbSB0aGUgcHJldmlvdXMgcmVzdGF1cmFudCBoYXZlIGJlZW4gcmVtb3ZlZC4ifSwKeyJrZXkiOiJvbmdvaW5nT3JkZXJNc2ciLCJ2YWx1ZSI6IllvdSBoYXZlIHNvbWUgb24tZ29pbmcgb3JkZXJzLiBWSUVXIn0sCnsia2V5IjoidHJhY2tPcmRlclRleHQiLCJ2YWx1ZSI6IlRyYWNrIE9yZGVyIn0sCnsia2V5Ijoib3JkZXJQbGFjZWRTdGF0dXNUZXh0IiwidmFsdWUiOiJPcmRlciBQbGFjZWQifSwKeyJrZXkiOiJwcmVwYXJpbmdPcmRlclN0YXR1c1RleHQiLCJ2YWx1ZSI6IlByZXBhcmluZyBPcmRlciJ9LAp7ImtleSI6ImRlbGl2ZXJ5R3V5QXNzaWduZWRTdGF0dXNUZXh0IiwidmFsdWUiOiJEZWxpdmVyeSBHdXkgQXNzaWduZWQifSwKeyJrZXkiOiJvcmRlclBpY2tlZFVwU3RhdHVzVGV4dCIsInZhbHVlIjoiT3JkZXIgUGlja2VkIFVwIn0sCnsia2V5IjoiZGVsaXZlcmVkU3RhdHVzVGV4dCIsInZhbHVlIjoiRGVsaXZlcmVkIn0sCnsia2V5IjoiY2FuY2VsZWRTdGF0dXNUZXh0IiwidmFsdWUiOiJDYW5jZWxlZCJ9LAp7ImtleSI6InJlYWR5Rm9yUGlja3VwU3RhdHVzVGV4dCIsInZhbHVlIjoiUmVhZHkgRm9yIFBpY2t1cCJ9LAp7ImtleSI6InB1cmVWZWdUZXh0IiwidmFsdWUiOiJQdXJlIFZlZyJ9LAp7ImtleSI6ImNlcnRpZmljYXRlQ29kZVRleHQiLCJ2YWx1ZSI6IkNlcnRpZmljYXRlIENvZGU6ICJ9LAp7ImtleSI6InNob3dNb3JlQnV0dG9uVGV4dCIsInZhbHVlIjoiU2hvdyBNb3JlIn0sCnsia2V5Ijoic2hvd0xlc3NCdXR0b25UZXh0IiwidmFsdWUiOiJTaG93IExlc3MifSwKeyJrZXkiOiJ3YWxsZXROYW1lIiwidmFsdWUiOiJXYWxsZXQifSwKeyJrZXkiOiJhY2NvdW50TXlXYWxsZXQiLCJ2YWx1ZSI6Ik15IFdhbGxldCJ9LAp7ImtleSI6Im5vV2FsbGV0VHJhbnNhY3Rpb25zVGV4dCIsInZhbHVlIjoiTm8gV2FsbGV0IFRyYW5zYWN0aW9ucyBZZXQhISEifSwKeyJrZXkiOiJ3YWxsZXREZXBvc2l0VGV4dCIsInZhbHVlIjoiRGVwb3NpdCJ9LAp7ImtleSI6IndhbGxldFdpdGhkcmF3VGV4dCIsInZhbHVlIjoiV2l0aGRyYXcifSwKeyJrZXkiOiJwYXlQYXJ0aWFsV2l0aFdhbGxldFRleHQiLCJ2YWx1ZSI6IlBheSBwYXJ0aWFsIGFtb3VudCB3aXRoIHdhbGxldCJ9LAp7ImtleSI6IndpbGxiZURlZHVjdGVkVGV4dCIsInZhbHVlIjoid2lsbCBiZSBkZWR1Y3RlZCBmcm9tIHlvdXIgYmFsYW5jZSBvZiJ9LAp7ImtleSI6InBheUZ1bGxXaXRoV2FsbGV0VGV4dCIsInZhbHVlIjoiUGF5IGZ1bGwgYW1vdW50IHdpdGggV2FsbGV0LiJ9LAp7ImtleSI6Im9yZGVyUGF5bWVudFdhbGxldENvbW1lbnQiLCJ2YWx1ZSI6IlBheW1lbnQgZm9yIG9yZGVyOiJ9LAp7ImtleSI6Im9yZGVyUGFydGlhbFBheW1lbnRXYWxsZXRDb21tZW50IiwidmFsdWUiOiJQYXJ0aWFsIHBheW1lbnQgZm9yIG9yZGVyOiJ9LAp7ImtleSI6Im9yZGVyUmVmdW5kV2FsbGV0Q29tbWVudCIsInZhbHVlIjoiUmVmdW5kIGZvciBvcmRlciBjYW5jZWxsYXRpb24uIn0sCnsia2V5Ijoib3JkZXJQYXJ0aWFsUmVmdW5kV2FsbGV0Q29tbWVudCIsInZhbHVlIjoiUGFydGlhbCBSZWZ1bmQgZm9yIG9yZGVyIGNhbmNlbGxhdGlvbi4ifSwKeyJrZXkiOiJlbkRldk1vZGUiLCJ2YWx1ZSI6InRydWUifSwKeyJrZXkiOiJ3YWxsZXRSZWRlZW1CdG5UZXh0IiwidmFsdWUiOiJSZWRlZW0ifSwKeyJrZXkiOiJyZXN0YXVyYW50TmV3T3JkZXJOb3RpZmljYXRpb25Nc2ciLCJ2YWx1ZSI6IkEgTmV3IE9yZGVyIGhhcyBBcnJpdmVkICEhISJ9LAp7ImtleSI6InJlc3RhdXJhbnROZXdPcmRlck5vdGlmaWNhdGlvbk1zZ1N1YiIsInZhbHVlIjoiTmV3IE9yZGVyIE5vdGlmaWNhdGlvbiJ9LAp7ImtleSI6ImRlbGl2ZXJ5R3V5TmV3T3JkZXJOb3RpZmljYXRpb25Nc2ciLCJ2YWx1ZSI6IkEgTmV3IE9yZGVyIGlzIFdhaXRpbmcgISEhIn0sCnsia2V5IjoiZGVsaXZlcnlHdXlOZXdPcmRlck5vdGlmaWNhdGlvbk1zZ1N1YiIsInZhbHVlIjoiTmV3IE9yZGVyIE5vdGlmaWNhdGlvbiJ9LAp7ImtleSI6ImZpcmViYXNlU0RLU25pcHBldCIsInZhbHVlIjoiIn0sCnsia2V5IjoiY2FydENvdXBvbk9mZlRleHQiLCJ2YWx1ZSI6Ik9GRiJ9LAp7ImtleSI6IndpbGxCZVJlZnVuZGVkVGV4dCIsInZhbHVlIjoid2lsbCBiZSByZWZ1bmRlZCBiYWNrIHRvIHlvdXIgd2FsbGV0LiJ9LAp7ImtleSI6IndpbGxOb3RCZVJlZnVuZGVkVGV4dCIsInZhbHVlIjoiTm8gUmVmdW5kIHdpbGwgYmUgbWFkZSB0byB5b3VyIHdhbGxldCBhcyB0aGUgcmVzdGF1cmFudCBoYXMgYWxyZWFkeSBwcmVwYXJlZCB0aGUgb3JkZXIuIn0sCnsia2V5IjoiY2FydFJlc3RhdXJhbnROb3RPcGVyYXRpb25hbCIsInZhbHVlIjoiUmVzdGF1cmFudCBpcyBub3Qgb3BlcmF0aW9uYWwgb24geW91ciBzZWxlY3RlZCBsb2NhdGlvbi4ifSwKeyJrZXkiOiJhZGRyZXNzRG9lc25vdERlbGl2ZXJUb1RleHQiLCJ2YWx1ZSI6IkRvZXMgbm90IGRlbGl2ZXIgdG8ifSwKeyJrZXkiOiJnb29nbGVBcGlLZXkiLCJ2YWx1ZSI6IiJ9LAp7ImtleSI6InVzZUN1cnJlbnRMb2NhdGlvblRleHQiLCJ2YWx1ZSI6IlVzZSBDdXJyZW50IExvY2F0aW9uIn0sCnsia2V5IjoiZ3BzQWNjZXNzTm90R3JhbnRlZE1zZyIsInZhbHVlIjoiR1BTIGFjY2VzcyBpcyBub3QgZ3JhbnRlZCBvciB3YXMgZGVuaWVkLiJ9LAp7ImtleSI6InlvdXJMb2NhdGlvblRleHQiLCJ2YWx1ZSI6IllPVVIgTE9DQVRJT04ifSwKeyJrZXkiOiJub3RBY2NlcHRpbmdPcmRlcnNNc2ciLCJ2YWx1ZSI6IkN1cnJlbnRseSBOb3QgQWNjZXB0aW5nIEFueSBPcmRlcnMifSwKeyJrZXkiOiJleHBsb3JlUmVzdGF1dGFudHNUZXh0IiwidmFsdWUiOiJSRVNUQVVSQU5UUyJ9LAp7ImtleSI6ImV4cGxvcmVJdGVtc1RleHQiLCJ2YWx1ZSI6IklURU1TIn0sCnsia2V5IjoiaGlkZVByaWNlV2hlblplcm8iLCJ2YWx1ZSI6InRydWUifSwKeyJrZXkiOiJwaG9uZUNvdW50cnlDb2RlIiwidmFsdWUiOiIrMSJ9LAp7ImtleSI6Im9yZGVyQ2FuY2VsbGF0aW9uQ29uZmlybWF0aW9uVGV4dCIsInZhbHVlIjoiRG8geW91IHdhbnQgdG8gY2FuY2VsIHRoaXMgb3JkZXI/In0sCnsia2V5IjoieWVzQ2FuY2VsT3JkZXJCdG4iLCJ2YWx1ZSI6IlllcywgQ2FuY2VsIE9yZGVyIn0sCnsia2V5IjoiY2FuY2VsR29CYWNrQnRuIiwidmFsdWUiOiJHbyBiYWNrIn0sCnsia2V5IjoiY2FuY2VsT3JkZXJNYWluQnV0dG9uIiwidmFsdWUiOiJDYW5jZWwgT3JkZXIifSwKeyJrZXkiOiJkZWxpdmVyeU9yZGVyUGxhY2VkVGV4dCIsInZhbHVlIjoiT3JkZXIgUGxhY2VkIn0sCnsia2V5IjoiZGVsaXZlcnlDYXNoT25EZWxpdmVyeSIsInZhbHVlIjoiQ2FzaCBPbiBEZWxpdmVyeSJ9LAp7ImtleSI6InNvY2lhbExvZ2luT3JUZXh0IiwidmFsdWUiOiJPUiJ9LAp7ImtleSI6Im9yZGVyQ2FuY2VsbGVkVGV4dCIsInZhbHVlIjoiT3JkZXIgQ2FuY2VsbGVkIn0sCnsia2V5Ijoic2VhcmNoQXRsZWFzdFRocmVlQ2hhcnNNc2ciLCJ2YWx1ZSI6IkVudGVyIGF0IGxlYXN0IDMgY2hhcmFjdGVycyB0byBzZWFyY2guIn0sCnsia2V5IjoibXVsdGlMYW5ndWFnZVNlbGVjdGlvbiIsInZhbHVlIjoidHJ1ZSJ9LAp7ImtleSI6ImNoYW5nZUxhbmd1YWdlVGV4dCIsInZhbHVlIjoiQ2hhbmdlIExhbmd1YWdlIn0sCnsia2V5IjoiZGVsaXZlcnlGb290ZXJOZXdUaXRsZSIsInZhbHVlIjoiTmV3IE9yZGVycyJ9LAp7ImtleSI6ImRlbGl2ZXJ5Rm9vdGVyQWNjZXB0ZWRUaXRsZSIsInZhbHVlIjoiQWNjZXB0ZWQifSwKeyJrZXkiOiJkZWxpdmVyeUZvb3RlckFjY291bnQiLCJ2YWx1ZSI6IkFjY291bnQifSwKeyJrZXkiOiJlbmFibGVEZWxpdmVyeUd1eUVhcm5pbmciLCJ2YWx1ZSI6ImZhbHNlIn0sCnsia2V5IjoiZGVsaXZlcnlHdXlDb21taXNzaW9uRnJvbSIsInZhbHVlIjoiRlVMTE9SREVSIn0sCnsia2V5IjoiZGVsaXZlcnlFYXJuaW5nc1RleHQiLCJ2YWx1ZSI6IkVhcm5pbmdzIn0sCnsia2V5IjoiZGVsaXZlcnlPbkdvaW5nVGV4dCIsInZhbHVlIjoiT24tR29pbmcifSwKeyJrZXkiOiJkZWxpdmVyeUNvbXBsZXRlZFRleHQiLCJ2YWx1ZSI6IkNvbXBsZXRlZCJ9LAp7ImtleSI6ImRlbGl2ZXJ5Q29tbWlzc2lvbk1lc3NhZ2UiLCJ2YWx1ZSI6IkNvbW1pc3Npb24gZm9yIG9yZGVyOiAifSwKeyJrZXkiOiJpdGVtU2VhcmNoVGV4dCIsInZhbHVlIjoiU2VhcmNoIHJlc3VsdHMgZm9yOiAifSwKeyJrZXkiOiJpdGVtU2VhcmNoTm9SZXN1bHRUZXh0IiwidmFsdWUiOiJObyByZXN1bHRzIGZvdW5kIGZvcjogIn0sCnsia2V5IjoiaXRlbVNlYXJjaFBsYWNlaG9sZGVyIiwidmFsdWUiOiJTZWFyY2ggZm9yIGl0ZW1zLi4uIn0sCnsia2V5IjoiZ29vZ2xlQXBpS2V5SVAiLCJ2YWx1ZSI6IG51bGx9LAp7ImtleSI6Iml0ZW1zTWVudUJ1dHRvblRleHQiLCJ2YWx1ZSI6Ik1FTlUifSwKeyJrZXkiOiJlblBhc3NSZXNldEVtYWlsIiwidmFsdWUiOiJmYWxzZSJ9LAp7ImtleSI6Im1haWxfaG9zdCIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJtYWlsX3BvcnQiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5IjoibWFpbF91c2VybmFtZSIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJtYWlsX3Bhc3N3b3JkIiwidmFsdWUiOm51bGx9LAp7ImtleSI6Im1haWxfZW5jcnlwdGlvbiIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJlblJlc3RhdXJhbnRDYXRlZ29yeVNsaWRlciIsInZhbHVlIjpmYWxzZX0sCnsia2V5IjoicmVzdGF1cmFudENhdGVnb3J5U2xpZGVyUG9zaXRpb24iLCJ2YWx1ZSI6IjIifSwKeyJrZXkiOiJyZXN0YXVyYW50Q2F0ZWdvcnlTbGlkZXJTaXplIiwidmFsdWUiOiIzIn0sCnsia2V5Ijoic2hvd1Jlc3RhdXJhbnRDYXRlZ29yeVNsaWRlckxhYmVsIiwidmFsdWUiOiJmYWxzZSJ9LAp7ImtleSI6InJlc3RhdXJhbnRDYXRlZ29yeVNsaWRlclN0eWxlIiwidmFsdWUiOiIwLjQifSwKeyJrZXkiOiJlblJBUiIsInZhbHVlIjoidHJ1ZSJ9LAp7ImtleSI6InJhck1vZEVuSG9tZUJhbm5lciIsInZhbHVlIjoidHJ1ZSJ9LAp7ImtleSI6InJhck1vZFNob3dCYW5uZXJSZXN0YXVyYW50TmFtZSIsInZhbHVlIjoidHJ1ZSJ9LAp7ImtleSI6InJhck1vZEhvbWVCYW5uZXJQb3NpdGlvbiIsInZhbHVlIjoiMiJ9LAp7ImtleSI6InJhck1vZEhvbWVCYW5uZXJCZ0NvbG9yIiwidmFsdWUiOiJyZ2IoMjU1LCAyMzUsIDU5KSJ9LAp7ImtleSI6InJhck1vZEhvbWVCYW5uZXJUZXh0Q29sb3IiLCJ2YWx1ZSI6InJnYigwLCAwLCAwKSJ9LAp7ImtleSI6InJhck1vZEhvbWVCYW5uZXJTdGFyc0NvbG9yIiwidmFsdWUiOiJyZ2IoMjU1LCAxNjIsIDApIn0sCnsia2V5IjoicmFyTW9kSG9tZUJhbm5lclRleHQiLCJ2YWx1ZSI6IlJhdGUgYW5kIFJldmlldyJ9LAp7ImtleSI6InJhck1vZFJhdGluZ1BhZ2VUaXRsZSIsInZhbHVlIjoiUmF0ZSBZb3VyIE9yZGVyIn0sCnsia2V5IjoicmFyTW9kRGVsaXZlcnlSYXRpbmdUaXRsZSIsInZhbHVlIjoiUmF0ZSB0aGUgRGVsaXZlcnkifSwKeyJrZXkiOiJyYXJNb2RSZXN0YXVyYW50UmF0aW5nVGl0bGUiLCJ2YWx1ZSI6IlJhdGUgdGhlIFJlc3RhdXJhbnQifSwKeyJrZXkiOiJyYXJSZXZpZXdCb3hUaXRsZSIsInZhbHVlIjoiWW91ciBGZWVkYmFjayJ9LAp7ImtleSI6InJhclJldmlld0JveFRleHRQbGFjZUhvbGRlclRleHQiLCJ2YWx1ZSI6IldyaXRlIHlvdXIgZmVlZGJhY2sgaGVyZSAob3B0aW9uYWwpIn0sCnsia2V5IjoicmFyU3VibWl0QnV0dG9uVGV4dCIsInZhbHVlIjoiU3VibWl0In0sCnsia2V5Ijoic2hvd1BlcmNlbnRhZ2VEaXNjb3VudCIsInZhbHVlIjoidHJ1ZSJ9LAp7ImtleSI6Iml0ZW1QZXJjZW50YWdlRGlzY291bnRUZXh0IiwidmFsdWUiOiIlIE9GRiJ9LAp7ImtleSI6InNob3dWZWdOb25WZWdCYWRnZSIsInZhbHVlIjoidHJ1ZSJ9LAp7ImtleSI6ImV4cGxvcmVOb1Jlc3VsdHMiLCJ2YWx1ZSI6Ik5vIEl0ZW1zIG9yIFJlc3RhdXJhbnRzIEZvdW5kIn0sCnsia2V5IjoidXBkYXRpbmdNZXNzYWdlIiwidmFsdWUiOiJVcGRhdGluZyBTeXN0ZW0ifSwKeyJrZXkiOiJ1c2VyTm90Rm91bmRFcnJvck1lc3NhZ2UiLCJ2YWx1ZSI6Ik5vIHVzZXIgZm91bmQgd2l0aCB0aGlzIGVtYWlsLiJ9LAp7ImtleSI6ImludmFsaWRPdHBFcnJvck1lc3NhZ2UiLCJ2YWx1ZSI6IkludmFsaWQgT1RQIEVudGVyZWQifSwKeyJrZXkiOiJyZXNldFBhc3N3b3JkUGFnZVRpdGxlIiwidmFsdWUiOiJSZXNldCBQYXNzd29yZCJ9LAp7ImtleSI6InJlc2V0UGFzc3dvcmRQYWdlU3ViVGl0bGUiLCJ2YWx1ZSI6IkVudGVyIHlvdXIgZW1haWwgYWRkcmVzcyB0byBjb250aW51ZSJ9LAp7ImtleSI6InNlbmRPdHBPbkVtYWlsQnV0dG9uVGV4dCIsInZhbHVlIjoiU2VuZCBPVFAgb24gRW1haWwifSwKeyJrZXkiOiJhbHJlYWR5SGF2ZVJlc2V0T3RwQnV0dG9uVGV4dCIsInZhbHVlIjoiSSBhbHJlYWR5IGhhdmUgYW4gT1RQIn0sCnsia2V5IjoiZW50ZXJSZXNldE90cE1lc3NhZ2VUZXh0IiwidmFsdWUiOiJFbnRlciB0aGUgT1RQIHNlbnQgdG8geW91IGVtYWlsIn0sCnsia2V5IjoidmVyaWZ5UmVzZXRPdHBCdXR0b25UZXh0IiwidmFsdWUiOiJWZXJpZnkgT1RQIn0sCnsia2V5IjoiZG9udEhhdmVSZXNldE90cEJ1dHRvblRleHQiLCJ2YWx1ZSI6IkkgZG9udCBoYXZlIGFuIE9UUCJ9LAp7ImtleSI6ImVudGVyTmV3UGFzc3dvcmRUZXh0IiwidmFsdWUiOiJQbGVhc2UgZW50ZXIgYSBuZXcgcGFzc3dvcmQgYmVsb3cifSwKeyJrZXkiOiJuZXdQYXNzd29yZExhYmVsVGV4dCIsInZhbHVlIjoiTmV3IFBhc3N3b3JkIn0sCnsia2V5Ijoic2V0TmV3UGFzc3dvcmRCdXR0b25UZXh0IiwidmFsdWUiOiJTZXQgTmV3IFBhc3N3b3JkIn0sCnsia2V5IjoiZXhscG9yZUJ5UmVzdGF1cmFudFRleHQiLCJ2YWx1ZSI6IkJ5In0sCnsia2V5IjoiZm9yZ290UGFzc3dvcmRMaW5rVGV4dCIsInZhbHVlIjoiRm9yZ290IFBhc3N3b3JkPyJ9LAp7ImtleSI6ImNhdGVnb3JpZXNOb1Jlc3RhdXJhbnRzRm91bmRUZXh0IiwidmFsdWUiOiJObyBSZXN0YXVyYW50cyBGb3VuZCJ9LAp7ImtleSI6ImNhdGVnb3JpZXNGaWx0ZXJzVGV4dCIsInZhbHVlIjoiRmlsdGVycyJ9LAp7ImtleSI6InNlbmRFbWFpbEZyb21FbWFpbEFkZHJlc3MiLCJ2YWx1ZSI6ImRvLW5vdC1yZXBseUBmb29kb21hYS5jb20ifSwKeyJrZXkiOiJzZW5kRW1haWxGcm9tRW1haWxOYW1lIiwidmFsdWUiOiJGb29kb21hYSJ9LAp7ImtleSI6InBhc3N3b3JkUmVzZXRFbWFpbFN1YmplY3QiLCJ2YWx1ZSI6IlJlc2V0IFBhc3N3b3JkIE9UUCJ9LAp7ImtleSI6InJlZ2lzdHJhdGlvblBvbGljeU1lc3NhZ2UiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5IjoibG9jYXRpb25TYXZlZEFkZHJlc3NlcyIsInZhbHVlIjoiU2F2ZWQgQWRkcmVzc2VzIn0sCnsia2V5IjoicmVzdGF1cmFudE1pbk9yZGVyTWVzc2FnZSIsInZhbHVlIjoiTWluIGNhcnQgdmFsdWUgc2hvdWxkIGJlIGF0bGVhc3QgIn0sCnsia2V5IjoiZm9vdGVyQWxlcnRzIiwidmFsdWUiOiJBbGVydHMifSwKeyJrZXkiOiJzaG93RnJvbU5vd0RhdGUiLCJ2YWx1ZSI6InRydWUifSwKeyJrZXkiOiJtYXJrQWxsQWxlcnRSZWFkVGV4dCIsInZhbHVlIjoiTWFyayBhbGwgcmVhZCJ9LAp7ImtleSI6Im5vTmV3QWxlcnRzVGV4dCIsInZhbHVlIjoiTm8gbmV3IGFsZXJ0cyJ9LAp7ImtleSI6ImN1cnJlbmN5U3ltYm9sQWxpZ24iLCJ2YWx1ZSI6ImxlZnQifSwKeyJrZXkiOiJyZXN0YXVyYW50Tm90aWZpY2F0aW9uQXVkaW9UcmFjayIsInZhbHVlIjoiQWxlcnQtNSJ9LAp7ImtleSI6InJlc3RhdXJhbnROZXdPcmRlclJlZnJlc2hSYXRlIiwidmFsdWUiOiIxNSJ9LAp7ImtleSI6ImVuRGVsQ2hyUm5kIiwidmFsdWUiOiJ0cnVlIn0sCnsia2V5IjoiZXhwYW5kQWxsSXRlbU1lbnUiLCJ2YWx1ZSI6InRydWUifSwKeyJrZXkiOiJtc2c5MUF1dGhLZXkiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5IjoibXNnOTFTZW5kZXJJZCIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJkZWZhdWx0U21zR2F0ZXdheSIsInZhbHVlIjoiMSJ9LAp7ImtleSI6Im90cE1lc3NhZ2UiLCJ2YWx1ZSI6IllvdXIgT1RQIHZlcmlmaWNhdGlvbiBjb2RlIGlzOiAifSwKeyJrZXkiOiJ0d2lsaW9Gcm9tUGhvbmUiLCJ2YWx1ZSI6bnVsbH0sCnsia2V5Ijoic21zUmVzdGF1cmFudE5vdGlmeSIsInZhbHVlIjoiZmFsc2UifSwKeyJrZXkiOiJzbXNEZWxpdmVyeU5vdGlmeSIsInZhbHVlIjoiZmFsc2UifSwKeyJrZXkiOiJkZWZhdWx0U21zUmVzdGF1cmFudE1zZyIsInZhbHVlIjoiWW91IGhhdmUgcmVjZWl2ZWQgYSBuZXcgb3JkZXIuIn0sCnsia2V5Ijoic21zUmVzdE9yZGVyVmFsdWUiLCJ2YWx1ZSI6ImZhbHNlIn0sCnsia2V5Ijoic21zT3JkZXJOb3RpZnkiLCJ2YWx1ZSI6ImZhbHNlIn0sCnsia2V5IjoiZGVmYXVsdFNtc0RlbGl2ZXJ5TXNnIiwidmFsdWUiOiJBIG5ldyBvcmRlciBoYXMgYXJyaXZlZC4ifSwKeyJrZXkiOiJzaG93T3JkZXJBZGRvbnNEZWxpdmVyeSIsInZhbHVlIjoidHJ1ZSJ9LAp7ImtleSI6InNob3dEZWxpdmVyeUZ1bGxBZGRyZXNzT25MaXN0IiwidmFsdWUiOiJ0cnVlIn0sCnsia2V5Ijoic2VuZGdyaWRfYXBpX2tleSIsInZhbHVlIjpudWxsfSwKeyJrZXkiOiJzaG93VXNlckluZm9CZWZvcmVQaWNrdXAiLCJ2YWx1ZSI6InRydWUifSwKeyJrZXkiOiJyZWNvbW1lbmRlZExheW91dFYyIiwidmFsdWUiOiJ0cnVlIn0sCnsia2V5IjoiY2FydEl0ZW1Ob3RBdmFpbGFibGUiLCJ2YWx1ZSI6Ikl0ZW0gTm90IEF2YWlsYWJsZSJ9LAp7ImtleSI6ImNhcnRSZW1vdmVJdGVtQnV0dG9uIiwidmFsdWUiOiJSZW1vdmUgSXRlbSJ9LAp7ImtleSI6ImRlbGl2ZXJ5VG90YWxFYXJuaW5nc1RleHQiLCJ2YWx1ZSI6IlRvdGFsIEVhcm5pbmdzIn0sCnsia2V5IjoiZmxhdEFwYXJ0bWVudEFkZHJlc3NSZXF1aXJlZCIsInZhbHVlIjoiZmFsc2UifSwKeyJrZXkiOiJkZWxpdmVyeVVzZVBob25lVG9BY2Nlc3NNc2ciLCJ2YWx1ZSI6IlVzZSB5b3VyIG1vYmlsZSBwaG9uZSB0byBsb2dpbiB0byB0aGUgRGVsaXZlcnkgQXBwbGljYXRpb24uIn0sCnsia2V5IjoicmVzdGF1cmFudE5vdEFjdGl2ZU1zZyIsInZhbHVlIjoiTm90IEFjY2VwdGluZyBPcmRlcnMifSwKeyJrZXkiOiJ1cGxvYWRJbWFnZVF1YWxpdHkiLCJ2YWx1ZSI6Ijc1In0sCnsia2V5IjoiZGVsaXZlcnlNYXhPcmRlclJlYWNoZWRNc2ciLCJ2YWx1ZSI6Ik1heCBPcmRlciBMaW1pdCBSZWFjaGVkIn0KXQ==');
            $data = json_decode($data);

            $dbSet = [];
            foreach ($data as $s) {

                //check if the setting key already exists, if exists, do nothing..
                $settingAlreadyExists = Setting::where('key', $s->key)->first();

                //else create an array of settings which doesnt exists...
                if (!$settingAlreadyExists) {
                    $dbSet[] = [
                        'key' => $s->key,
                        'value' => $s->value,
                    ];
                }
            }
            //insert new settings keys into settings table.
            DB::table('settings')->insert($dbSet);
            // ** SETTINGS END ** //

            // ** PAYMENTGATEWAYS ** //
            // check if paystack is installed
            $hasPayStack = PaymentGateway::where('name', 'PayStack')->first();
            if (!$hasPayStack) {
                //if not, then install new payment gateway "PayStack"
                $payStackPaymentGateway = new PaymentGateway();
                $payStackPaymentGateway->name = 'PayStack';
                $payStackPaymentGateway->description = 'PayStack Payment Gateway';
                $payStackPaymentGateway->is_active = 0;
                $payStackPaymentGateway->save();
            }
            // check if razorpay is installed
            $hasPayStack = PaymentGateway::where('name', 'Razorpay')->first();
            if (!$hasPayStack) {
                //if not, then install new payment gateway "PayStack"
                $payStackPaymentGateway = new PaymentGateway();
                $payStackPaymentGateway->name = 'Razorpay';
                $payStackPaymentGateway->description = 'Razorpay Payment Gateway';
                $payStackPaymentGateway->is_active = 0;
                $payStackPaymentGateway->save();
            }
            // ** END PAYMENTGATEWAYS ** //

            // ** ORDERSTATUS ** //
            // check if ready status is inserted
            $hasReadyOrderStatus = Orderstatus::where('id', '7')->first();
            if (!$hasReadyOrderStatus) {
                //if not, then insert it.
                $orderStatus = new Orderstatus();
                $orderStatus->name = 'Ready For Pick Up';
                $orderStatus->save();
            }
            // ** END ORDERSTATUS ** //

            // ** CHANGEURL ** //
            $jsFiles = glob(base_path('static/js') . '/*');
            foreach ($jsFiles as $file) {
                //read the entire string
                $str = file_get_contents($file);
                $baseUrl = substr(url('/'), 0, strrpos(url('/'), '/'));
                //replace string
                $str = str_replace('http://127.0.0.1/swiggy-laravel-react', $baseUrl, $str);
                //write the entire string
                file_put_contents($file, $str);
            }
            // ** END CHANGEURL ** //

            /*For v1.5 -> Remove all addresses and chnage all user default_address_id to 0 */
            $hasOnePointFive = File::exists(storage_path('hasOnePointFive'));
            if (!$hasOnePointFive) {
                DB::table('addresses')->truncate();
                $allUsers = User::get();
                foreach ($allUsers as $user) {
                    $user->default_address_id = 0;
                    $user->save();
                }

                //create English Translation
                $translation = new Translation();
                $translation->language_name = 'English';
                $translation->data = file_get_contents(storage_path('language/english.json'));
                $translation->is_active = 1;
                $translation->is_default = 1;
                $translation->save();

                File::put(storage_path('hasOnePointFive'), '1');
            }
            /* END for v1.5*/

            /** CLEAR LARAVEL CACHES **/
            Artisan::call('cache:clear');
            Artisan::call('view:clear');
            /** END CLEAR LARAVEL CACHES **/

            return redirect()->back()->with(['success' => 'Operation Successful']);
        } catch (\Illuminate\Database\QueryException $qe) {
            return redirect()->back()->with(['message' => $qe->getMessage()]);
        } catch (Exception $e) {
            return redirect()->back()->with(['message' => $e->getMessage()]);
        } catch (\Throwable $th) {
            return redirect()->back()->with(['message' => $th]);
        }

    }
}
