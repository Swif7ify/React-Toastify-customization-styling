# React Toastify Custom Utils

A customized React Toastify utility function with consistent styling and behavior for success, error, warning, and info notifications.

## Overview

This utility provides pre-configured toast functions that offer a consistent user experience across your React application. Each toast type comes with optimized settings for positioning, timing, and visual appearance.

## Features

-   🎯 **Consistent Positioning**: All toasts appear in bottom-right corner
-   🎨 **Themed Styling**: Uses colored theme with slide transition
-   ⏱️ **Smart Auto-close**: Success toasts stay longer, others auto-close in 5 seconds
-   🖱️ **Interactive**: Click to dismiss, pause on hover, draggable
-   📝 **Rich Content**: Support for both title and description text
-   🎭 **Multiple Types**: Success, Error, Warning, and Info variants

## Installation

First, install the required dependencies:

```bash
npm install react-toastify
```

## Files Structure

```
├── toast.tsx           # Main utility functions
├── globals.css         # Toast-specific styling
└── usage.tsx          # Example implementation
```

## Setup

### 1. Add the CSS styles

Add the following CSS to your global styles (e.g., `globals.css`):

```css
/* toast css */
.Toastify__toast strong {
	margin-bottom: 5px !important;
}
```

### 2. Import the utility functions

Copy the `toast.tsx` file to your utils directory and import the functions you need:

```tsx
import { toastSuccess, toastError, toastWarning, toastInfo } from "@/utils/toast";
```

### 3. Add ToastContainer to your app

Don't forget to add the `ToastContainer` to your main App component:

```tsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			{children}{" "}
			<ToastContainer />
		</div>
	);
}
```

## Usage

### Basic Usage

```tsx
import { toastSuccess, toastError, toastWarning, toastInfo } from "@/utils/toast";

// Simple message
toastSuccess("Operation completed successfully!");

// Message with description
toastSuccess("Data saved", "Your changes have been saved to the database");

// Error notification
toastError("Upload failed", "Please check your internet connection and try again");

// Warning notification
toastWarning("Storage almost full", "You have used 90% of your available storage");

// Info notification
toastInfo("New update available", "Version 2.0.1 is ready to install");
```

### Function Signatures

```tsx
toastSuccess(message: string, description?: string)
toastError(message: string, description?: string)
toastWarning(message: string, description?: string)
toastInfo(message: string, description?: string)
```

## Configuration Details

### Toast Settings

| Setting        | Success                        | Error/Warning/Info |
| -------------- | ------------------------------ | ------------------ |
| Position       | bottom-right                   | bottom-right       |
| Auto Close     | 5000ms (virtually permanent) | 5000ms             |
| Progress Bar   | Visible                        | Visible            |
| Close on Click | Yes                            | Yes                |
| Pause on Hover | Yes                            | Yes                |
| Draggable      | Yes                            | Yes                |
| Theme          | Colored                        | Colored            |
| Transition     | Slide                          | Slide              |

### Visual Structure

Each toast contains:

-   **Strong title text** (required)
-   **Description text** (optional, smaller font, top margin)
-   **Flex layout** for consistent spacing

## Customization

### Modifying Toast Behavior

To customize the behavior, edit the configuration object in `toast.tsx`:

```tsx
{
  position: "bottom-right",    // Change position
  autoClose: 5000,            // Modify auto-close time
  hideProgressBar: false,     // Show/hide progress bar
  closeOnClick: true,         // Enable/disable click to close
  pauseOnHover: true,         // Enable/disable pause on hover
  draggable: true,            // Enable/disable drag to dismiss
  theme: "colored",           // Change theme (light, dark, colored)
  transition: Slide,          // Change transition animation
}
```

### Styling

Modify the CSS in `globals.css` to change the appearance:

```css
.Toastify__toast strong {
	margin-bottom: 5px !important;
	font-weight: 600; /* Adjust font weight */
	color: #333; /* Change title color */
}
```

## Example Implementation

See `usage.tsx` for a complete example of how to implement these toast functions in your components.

## Dependencies

-   `react-toastify`: Toast notification library
-   `react`: React library

## License

This utility is provided as-is for educational and development purposes. Feel free to modify and adapt according to your project needs.

## Contributing

This is a utility collection. Feel free to extend or modify the functions based on your specific requirements.
