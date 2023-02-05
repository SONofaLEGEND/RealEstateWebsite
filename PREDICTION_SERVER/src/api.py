from bs4 import BeautifulSoup
import requests

url = "https://www.magicbricks.com/"
response = requests.get(url)

print (response);

soup = BeautifulSoup(response.content, "html.parser")
titles = soup.find_all("h2")
for title in titles:
    print(title.text)
