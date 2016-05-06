# thoughtbot Middleman Starter

## Google SpreadSheets Script
```
function doGet(e){
  var project_name = e.parameter.project_name
  var success_criteria = e.parameter.success_criteria
  var success_goal = e.parameter.success_goal
  var drive_url = e.parameter.drive_url
  var organization_name = e.parameter.organization_name
  var organization_owner = e.parameter.organization_owner
  var final_challenge = e.parameter.final_challenge
  writeData(project_name, success_criteria, success_goal, drive_url, organization_name, organization_owner,final_challenge);
  returnValue="success";
  return ContentService.createTextOutput('{"status":200}').setMimeType(ContentService.MimeType.JAVASCRIPT);
};

function writeData(project_name, success_criteria, success_goal, drive_url, organization_name, organization_owner,final_challenge) {
  var SPREADSHEET_ID = "18qo9j5hbpsIAs2IKT-N22d8uvgr3IJSlo5HhyhIKMb8"
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getActiveSheet();
  sheet.appendRow([project_name, success_criteria, success_goal, drive_url, organization_name, organization_owner,final_challenge]);
}
```

## License

Copyright © 2014–2015 [thoughtbot, inc](http://thoughtbot.com). thoughtbot Middleman Starter is free software, and may be redistributed under the terms specified in the [license](https://github.com/thoughtbot/bourbon/blob/master/LICENSE.md).
