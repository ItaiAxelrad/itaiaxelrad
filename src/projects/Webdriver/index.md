---
title: Python Webdriver
date: 2020-12-05
tags: ["personal",'webdriver', 'selenium', 'python', 'Netlify', 'scraping']
---

## Browser Automation

We'll be using the [Selenium WebDriver](https://www.selenium.dev/documentation/en/webdriver/), which drives a browser natively (either locally or on a remote machine) using the Selenium server. The webdriver manager ensures the latest version and correct path are being used. After importing the required packages, we set the webdriver options and instantiate the install using the driver manager. In this case, we'll being using Chrome. The driver can navigate to some site then the user authentication page and find elements by id or class in order to login.

```python
# create a login function with Chrome webdriver
def login():
    # set webderiver options
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument(
        '--disable-blink-features=AutomationControlled')
    chrome_options.add_argument("window-size=1280,800")
    # install webdriver as driver
    driver = webdriver.Chrome(
        executable_path=ChromeDriverManager().install(), options=chrome_options)
    # get login page via site url
    driver.get('https://www.somesite.nom/')
    driver.find_element_by_link_text('Log in').click()
    driver.find_element_by_id('username').send_keys(os.getenv('_USERNAME_'))
    driver.find_element_by_id('password').send_keys(os.getenv('_PASSWORD_'))
    driver.find_element_by_id('login').submit()
    return driver
```

Many sites (including 8a) will attempt to detect automated browsing in order to prevent scraping. In the above code, some measures have been taken to obscure the use of a webdriver, like setting a window size. A nice article appropriately titled [10 Ways to hide your Bot Automation from Detection](https://piprogramming.org/articles/How-to-make-Selenium-undetectable-and-stealth--7-Ways-to-hide-your-Bot-Automation-from-Detection-0000000017.html) addresses this well.

### Environmental Variables

The username/email and password can stored as environmental variables using `os.environ[]`.

```python
# set environmental variables for login
os.environ["_USERNAME_"] = "yourlogin@email.com"
os.environ["_PASSWORD_"] = "12345678"
```

However, I prefer to move any sensitive information away from my main code using the [dotnev](https://github.com/theskumar/python-dotenv) package. Create a `.env` file and store your login information like so `_8A_USERNAME="yourlogin@email.com"`. Then, load the package and .env file to access the environmental variables using the regular `os.getenv` command.

```python
from dotenv import load_dotenv
load_dotenv()  # take environment variables from .env.
# Code of your application, which uses environment variables (e.g. from `os.environ` or
# `os.getenv`) as if they came from the actual environment.
```

Be sure to add your `.env` file to `.gitignore`!
