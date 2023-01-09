# Muhlenberg Sustainability Dashboard

The Sustainability Dashboard displayed in the lobby of the Fhey building displaying non-interactive content for visitors. The display pulls a combination of static data and dynamic building data published from HiveMQ. This dashboard was designed and built specifically for a 4K display, so it is optimized and developed against a 3840 x 2160 pixel display. **That means it was not designed or built to be responsive for the web!**

## Installation
* Run on a clean server, requires Node.js v14+ and npm 6.14.8+
* Clone the project on the webserver
* In the root directory, run `npm --install` to install dependencies
* For development and testing with LiveReload, run `npm start`
* For production, run `npm run-script build` and deploy the dist directory

## Modifying Dashboard Data
The dashboard's data for non-dynamic slides is controlled through a data file, `data.yaml`. This allows you to modify the layout, structure, content, and design elements easily within the dashboard. Below is a breakdown of the available options within the data file that can be modified:

* id - the numerical id of the dashboard's screens
* layout - one of three options:
  * `1col` - a single column layout used for a large image
  * `2col` - a two-column layout use for text and image
  * `dynamic` - a custom build screen with dynamically updating data
* title - the title displayed on the top of the dashboard screen
* icon - the path to the svg icon displayed in the left navigation rail
* iconSize - one of several size options for changing the icon (no value is the default size)
  * `small`
  * `large`
  * `xlarge`
* bg - the path to the background image of the slide (size: 3840 x 2160)
* content - the text and image content in the layout. If layout is `2col` you can include a sub-column under this parent item
* showSidebar - a boolean value for whether or not to include a sidebar
* showSidebarBackground - a boolean value for whether or not to show the white background behind the sidebar
* sidebar - the text and image content in the sidebar
* qrcode - the path to the QR code image (size: 500 x 500)

## To Do List
- [x] General - Build out conditional branding overlay on top of background image
- [x] General - Fade in title, content, and sidebar animations
- [x] General - Add sample for QR code graphic placement and size, update docs
- [ ] General - Create connection to HiveMQ data, parse data
- [ ] General - Add in final static images and content
- [ ] Slide 4 - Add in last updated on date stamp
- [ ] Slide 5 - Add in last updated on date stamp

### Backlog
- [ ] General - Add slide specific timing override for slide duration
- [ ] Slide 4 - Convert data and style/finalize annual energy production graph
- [ ] Slide 4 - Convert data and style/finalize energy graphs
- [ ] Slide 4 - Convert data and style/finalize carbon footprint metrics
- [ ] Slide 5 - Convert rainwater data and style/finalize tank level graph
- [ ] Slide 5 - Style/finalize rainwater collection graph
- [ ] Slide 5 - Add in dynamic data to paragraph text
