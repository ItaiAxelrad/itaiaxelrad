---
title: Web Scraping with Python
date: 2021-04-05
image: ''
tags: ["personal",'webdriver', 'selenium', 'python', 'beautiful', 'soup', 'scraping', 'web', 'data']
---

Automated web scraping is the process of gathering or collecting information from a website using a script. *Resort to scraping when a public API is not available and the site allows it.*

## Data Source

For this tutorial, we will collect climbing crag information from a site called [betacache](https://www.betacache.com/) which aggregates climbing media (likely using web scraping itself). The site uses a numbered crag format for its pages `https://www.betacache.com/crags/${number}`. Navigate to [https://www.betacache.com/crags/3](https://www.betacache.com/crags/3), and inspect the page using the developer tools (right click, inspect). We can see the crag information for Red Rocks displayed something like so (at the time of writing):

```html
<h1 class="lined">Red Rocks</h1>
<!-- ...code omitted for clarity -->
<a href="/states/NV">Nevada,</a>
<a href="/int/1">United States</a>
<!-- ...code omitted for clarity -->
<b>Sectors:</b>
<div class="row mx-2">
    <div class="col-lg-3 col-12">
        <a href="/crags/962">Black Velvet Canyon</a> (13 climbs)
    </div>
    <div class="col-lg-3 col-12">
        <a href="/crags/943">Calico Basin</a> (3 climbs)
    </div>
<!-- ...code omitted for clarity -->
</div>
```

Instead of copying it by hand, we will have python grab this information for us.

## Setup

Make sure you have [python](https://www.python.org/downloads/) installed on your machine, and open your favorite code editor.

Next, install the [requests](https://docs.python-requests.org/en/master/) library, which allows you to send HTTP requests using python. To do so, open your integrated terminal and type `pip3 install requests`. Create a new file called `scraper.py` and write the following code:

```python
import requests

URL = 'https://www.betacache.com/crags/3'
page = requests.get(URL)
print(page)
```

You may run the above code by invoking python and specifying the name of the file that you wish to execute `python3 scraper.py`, or by clicking the green play button in the upper right corner if you're using vscode. Upon running the code, you should see a `<Response [200]>` in the console, meaning the site responded with a 200 HTTP status code which is equivalent to 'OK'.

## Content Parsing

Next, install [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/), which is a library for pulling data out of HTML. In the terminal run `pip3 install beautifulsoup4` and import it.

```python
import requests
from bs4 import BeautifulSoup

URL = 'https://www.betacache.com/crags/3'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
print(soup)
```

Run the above script, which should now print the content of the entire page we previously inspected. In order to grab just the information we want, we will use the html parser. To get the crag name, we will first select the h1 tag, and then extract the text content using the find method - `soup.find('h1', class_='lined').text`. We can select the other elements using a similar method and then wrap our code in a function.

```python
import requests
from bs4 import BeautifulSoup


def crag_info(number):
    crag = {
        "name": None,
        "state": None,
        "country": None,
        "sectors": [],
    }
    URL = f'https://www.betacache.com/crags/{number}'
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')
    # crag name
    crag['name'] = soup.find('h1', class_='lined').text.strip()
    # crag location
    location_div = soup.find('div', class_='col-lg-6 col-12')
    location_links = location_div.find_all('a')
    crag['state'] = location_links[0].text.strip()[:-1]
    crag['country'] = location_links[1].text.strip()
    # sectors
    sector_div = soup.find('div', class_='row mx-2')
    sectors = sector_div.find_all('a')
    for sector in sectors:
        crag['sectors'].append(sector.text.strip())
    return crag


print(crag_info(3))

# {
#     'name': 'Red Rocks',
#     'state': 'Nevada',
#     'country': 'United States',
#     'sectors': 
#         ['Black Velvet Canyon', 'Calico Basin', 'First Creek Canyon', 'First Pullout', 'Gateway Canyon', 'Kraft Boulders', 'Oak Creek Canyon', 'Red Springs', 'White Rock Springs', 'Windy Canyon', 'Willow Springs']
# }
```

Automating the scraping of a single crag may seem more tedious than copy pasting by hand, but what if we wanted info for many crags? For example, we could recursively extract crag information from the entire database using a while loop and an increment at the end of the above script.

If we wanted to find information for a single crag by name, however, we are out of luck as the site uses an arbitrary numbering convention. To achieve this, we can leverage the search input that the site offers. In order to do this, we need to switch gears, since our above code can only request and parse static content.

## Browser Automation

We'll be using the [Selenium WebDriver](https://www.selenium.dev/documentation/en/webdriver/), which drives a browser natively (either locally or on a remote machine) using the Selenium server. After importing the required packages, we set the webdriver options and instantiate the install using the driver manager. In this case, we'll being using Chrome.

### Login Function

Commonly, a webdriver is used to automate authentication. We can navigate to our desired site then, the user authentication page, and find elements by id or class in order to login. Below is a sample login function:

```python
# create a login function with selenium webdriver
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
    driver.get('https://www.somesite.com/')
    driver.find_element_by_link_text('Log in').click()
    driver.find_element_by_id('username').send_keys(os.getenv('_USERNAME_'))
    driver.find_element_by_id('password').send_keys(os.getenv('_PASSWORD_'))
    driver.find_element_by_id('login').submit()
    return driver
```

The webdriver manager ensures the latest version and correct path are being used, however, you may download the webdriver yourself instead.

Many sites will attempt to detect automated browsing in order to prevent scraping. In the above code, some measures have been taken to obscure the use of a webdriver, like setting a window size. A nice article appropriately titled [10 Ways to hide your Bot Automation from Detection](https://piprogramming.org/articles/How-to-make-Selenium-undetectable-and-stealth--7-Ways-to-hide-your-Bot-Automation-from-Detection-0000000017.html) addresses this well.

### Environmental Variables

The username and password can stored as environmental variables using `os.environ[]`.

```python
# set environmental variables for login
os.environ["_USERNAME_"] = "username"
os.environ["_PASSWORD_"] = "betacache123"
```

However, it is safer to move any sensitive information away from the main code using the [dotnev](https://github.com/theskumar/python-dotenv) package. Create a `.env` file and store your login information like so `_USERNAME_="username"`. Then, load the package and .env file to access the environmental variables using the regular `os.getenv` command.

```python
from dotenv import load_dotenv
load_dotenv()  # take environment variables from .env.
# Code of your application, which uses environment variables (e.g. from `os.environ` or
# `os.getenv`) as if they came from the actual environment.
```

Hosting platforms will have their own environmental variable configuration as well, so be sure to read up on the documentation for your production site. Lastly, be sure to add your `.env` file to `.gitignore`!
