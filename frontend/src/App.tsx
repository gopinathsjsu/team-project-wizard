import './App.css'
import "./animation.css";
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import {AppContextProvider} from "./Context/AppContext";
const pages:any = import.meta.glob("./pages/**/*.tsx", { eager: true });

function App() {
  const routes = [];

  for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
    if (!fileName) {
      continue;
    }
    let normalizedPathName = fileName.replace(/\/index/, "");
    normalizedPathName = normalizedPathName.replace("$", ":") ;
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

  const showiz: MantineColorsTuple = [
    "#ffebeb",
    "#fbd6d7",
    "#f0abae",
    "#e67d81",
    "#de575c",
    "#d93e44",
    "#d83038",
    "#c0232a",
    "#ab1c24",
    "#96111d"
  ];

  const theme = createTheme({
    primaryColor: 'showiz',
    colors: {
      showiz
    }
  });
  
  
  return (
    <MantineProvider theme={theme}>
      <AppContextProvider>
        <RouterProvider router={router}/>
      </AppContextProvider>
    </MantineProvider>
  )
}

export default App
