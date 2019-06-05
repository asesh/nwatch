var seleniumHost = process.env.SELENIUM_HOST || 'localhost';

var config = {
    "src_folders" : ["tests"],
    "page_objects_path" : "",
    "globals_path" : "",

    "selenium" : {
	"start_process" : false,
	"server_path" : "",
	"log_path" : "",
	"host" : seleniumHost,
	"port" : 4444,
	"cli_args" : {
	    "webdriver.chrome.driver" : "",
	    "webdriver.ie.driver" : ""
	}
    },

    "test_settings" : {
	"default" : {
	    "launch_url" : "http://localhost",
	    "selenium_port"  : 4444,
	    "selenium_host"  : seleniumHost,
	    "silent": true,
	    "screenshots" : {
		"enabled" : false,
		"path" : ""
	    },
	    "desiredCapabilities": {
		"browserName": "chrome",
		"javascriptEnabled": true,
		"acceptSslCerts": true
	    }
	},

	"chrome" : {
	    "desiredCapabilities": {
		"browserName": "chrome",
		"javascriptEnabled": true,
		"acceptSslCerts": true
	    }
	}
    }
}

module.exports = config;