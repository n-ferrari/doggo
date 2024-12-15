# doggo

Collaborative project to create a website to find lost dogs.

## Step by step how I've created this Project

- Create file .nvmrc
  - File needed to specify the version of node (file with lts/Iron inside). Then use nvm install to update node.
- Configuration of Dependencies
  - Run npm init. This creates the file "package.json" that specifies the version of the packages used
  - Run npm install next
  - Run npm install react
  - Run npm install react-dom
  - In package.json, replace the text inside "scripts" with "dev": "next dev"
- Create pages
  - Create folder named "pages"
  - Create inside file named "index.js"
  - Inside index.js, write

```javascript
function Home() {
  return <h1>Page in construction</h1>;
}
export default Home;
```
