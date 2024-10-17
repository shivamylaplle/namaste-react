# Parcel
 - Dev Build
 - Local Server
 - HMR = Hot Module Replacement.(After Modification, Automatically refreshes the dom(page))
 - File Watching Algorithm(c++)
 - Caching - Faster Builds
 - Image Optimization.
 - Minification of file.
 - Bundling of files
 - Compress the files.
 - Consistent Hashing.
 - Code Splitting(Split the files)
 - Differential Bundling (App can be opened in all the differnet browsers)
 - Diagnostic(Showing errors on the dom).
 - Error Handling
 - It builds apps in https as well.
 - Tree Shaking (Suppose out of 100 Functions, 4 functions we are using it. Parcel will remove unused code).
 - Different Build for dev and prod bundles.

 # Namaste Food

 /* 
--Components
* Header
*   - Logo
*   - Nav Items
* Body
*   - Search
*   - Restaurant Container
*      -  Restaurant Card
*          -  Img
*          -  Name of the res, Star Rating, Cuisine, Delivery time.
* Footer
*   -  Copyright
*   -  Links
*   -  Address
*   -  Contact
*/



Two Types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";


-Named Export/Import

export const Component;
import {component} from "path";

