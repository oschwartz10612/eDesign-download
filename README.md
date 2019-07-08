# eDesign-download
A simple Node js application to download all specified spreads from HJ eDesign so they can all be printed at once. No more printing individually!

## Installation
1. Download and install Node js: https://nodejs.org/en/

2. Download the [latest release](https://github.com/oschwartz10612/eDesign-download/releases/latest) for your platform.

3. Run and enjoy!

## Usage

1. Keep a spreadsheet of the spread ids and update as you open spreads.

2. Open the app and fill out the required fiends. How do I get these strings? 
⋅⋅1. Open eDesign and navigate to a page. In the top menue, click File then "Create High-Res PDF".
⋅⋅2. Wait for this new window to load. In the URL bar. Find the ticket ID and the session ID and copy them into the fields.
⋅⋅3. The download path is not abslute. Leave as is (it will download into the downloads folder in the project root directory) or change accordingly. 

3. Paste from a spreadsheet the spread ids into the spread ID area and click download.

4. The PDFs will appear in the download location set. Allow for time to download. You should verify that everything has finished downloading by opening a file or two before quitting the application.

## Contributions
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
