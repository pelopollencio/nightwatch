module.exports = {
    "src_folders" : ["tests"],
    "page_objects_path" : ["page_objects"],  
  
    "webdriver" : {
      "start_process": true,
      "server_path": "node_modules/.bin/geckodriver",
      "port": 9515
    },
  
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "firefox"
        }
      }
    }
  }

  
  
