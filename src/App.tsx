import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider} from '@mantine/core';
const pages:any = import.meta.glob("./pages/**/*.tsx", { eager: true });

function App() {
  const routes = [];

  for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
    if (!fileName) {
      continue;
    }
  
    const normalizedPathName = fileName.includes("$")
      ? fileName.replace("$", ":")
      : fileName.replace(/\/index/, "");
    routes.push({
        path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
        Element: pages[path].default,
        loader: pages[path]?.loader,
        action: pages[path]?.action,
        ErrorBoundary: pages[path]?.ErrorBoundary,
    });
    // ...
  }
  console.log(routes);
  const router = createBrowserRouter(
    routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    }))
  );

  return (
    <MantineProvider>
      <RouterProvider router={router}/>
    </MantineProvider>
  )
}

export default App
