import {NavLink, Outlet, RouteObject} from "react-router";
import { About } from "./Routes/About";
import { Home } from "./Routes/Home";
import { PageNotFound } from "./Routes/PageNotFound";
import { Post } from "./Routes/Post";
import { Posts } from "./Routes/Posts";

export const routesConfig: RouteObject[] = [{
    element: (
        <>
            <div className="navbar" data-testid='NavBar'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/posts"}>Posts</NavLink>
            </div>
            <Outlet></Outlet>
        </>
    ),
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/posts',
            element: <Posts />
        },
        {
            path: '/post/:id',
            element: <Post />
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ]
}]