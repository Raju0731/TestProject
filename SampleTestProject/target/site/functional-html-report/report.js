$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/com/functional/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "User wishes to access URL and logIn to application",
  "description": "",
  "id": "user-wishes-to-access-url-and-login-to-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4921525501,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch URL \"https://accounts.google.com/ServiceLogin#identifier\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user access the URL",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user should be presented on webpage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://accounts.google.com/ServiceLogin#identifier",
      "offset": 12
    }
  ],
  "location": "StepDef_login.launch_url_something(String)"
});
formatter.result({
  "duration": 227902086,
  "status": "passed"
});
formatter.match({
  "location": "StepDef_login.the_user_access_the_URL()"
});
formatter.result({
  "duration": 12141928833,
  "status": "passed"
});
formatter.match({
  "location": "StepDef_login.the_user_should_be_presented_on_webpage()"
});
formatter.result({
  "duration": 40501579,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Logo",
  "description": "",
  "id": "user-wishes-to-access-url-and-login-to-application;verify-logo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "the user access the URL",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the user should see Google logo",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef_login.the_user_access_the_URL()"
});
formatter.result({
  "duration": 2249535953,
  "status": "passed"
});
formatter.match({
  "location": "StepDef_login.the_user_should_see_Google_logo()"
});
formatter.result({
  "duration": 560078386,
  "status": "passed"
});
formatter.before({
  "duration": 2325134796,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Launch URL \"https://accounts.google.com/ServiceLogin#identifier\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user access the URL",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the user should be presented on webpage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://accounts.google.com/ServiceLogin#identifier",
      "offset": 12
    }
  ],
  "location": "StepDef_login.launch_url_something(String)"
});
formatter.result({
  "duration": 223150,
  "status": "passed"
});
formatter.match({
  "location": "StepDef_login.the_user_access_the_URL()"
});
formatter.result({
  "duration": 9405412998,
  "status": "passed"
});
formatter.match({
  "location": "StepDef_login.the_user_should_be_presented_on_webpage()"
});
formatter.result({
  "duration": 7138920,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login functionality",
  "description": "",
  "id": "user-wishes-to-access-url-and-login-to-application;login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the user access the URL",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user enter invalid username and password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user should be logged into application",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef_login.the_user_access_the_URL()"
});
formatter.result({
  "duration": 2260163341,
  "status": "passed"
});
formatter.match({
  "location": "StepDef_login.the_user_enter_invalid_username_and_password()"
});
formatter.result({
  "duration": 5624732295,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"Email\"}\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027KIHYDL1093\u0027, ip: \u0027172.31.208.113\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49989}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.44.609538 (b655c5a60b0b544917107a59d4153d4bf78e1b90), userDataDir\u003dC:\\Users\\KURAPA~1\\AppData\\Local\\Temp\\scoped_dir12632_24541}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.102, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b6d75cd7313d12eaef03d910004b74f4\n*** Element info: {Using\u003did, value\u003dEmail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.functional.utilities.Helpers.setValue(Helpers.java:50)\r\n\tat com.functional.pageobjects.Gmail_Login.login(Gmail_Login.java:54)\r\n\tat com.functional.teststeps.StepDef_login.the_user_enter_invalid_username_and_password(StepDef_login.java:58)\r\n\tat ✽.And the user enter invalid username and password(resources/com/functional/features/Login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef_login.the_user_should_be_logged_into_application()"
});
formatter.result({
  "status": "skipped"
});
});