import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="hero-overlay bg-opacity-60"></div>
        <h1 className="mb-5 text-3xl lg:text-5xl font-bold py-6 text-center">
          Some Common Question & Answers
        </h1>
      </div>

      <div className="flex flex-row text-center invisible lg:visible">
        <AnchorLink href="#cors" className="btn grow">
          Cors
        </AnchorLink>
        <AnchorLink href="#firebase" className="btn grow ">
          Firebase & Authentication
        </AnchorLink>
        <AnchorLink href="#private-route" className="btn grow">
          Private Route
        </AnchorLink>
        <AnchorLink href="#node" className="btn grow">
          Node
        </AnchorLink>
      </div>

      <div
        id="cors"
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
      >
        <div className="collapse-title text-3xl font-medium">
          What is 'cors'?
        </div>

        <div className="collapse-content">
          <div className="divider"></div>
          <p className="indent-12 px-8 leading-relaxed text-justify py-5">
            CORS stands for Cross-Origin Resource Sharing. It allows us to relax
            the security applied to an API. This is done by bypassing the
            Access-Control-Allow-Origin headers, which specify which origins can
            access the API. <br />
            In other words, CORS is a browser security feature that restricts
            cross-origin HTTP requests with other servers and specifies which
            domains access your resources.
            <br />
            When you deploy an application on the server, you should not accept
            requests from every domain. Instead, you should specify which origin
            can make requests to your server.
            <br />
            This way, you are able to block users who attempt to clone your site
            or make requests from an unauthorized servers. This is important an
            security measure.
          </p>
        </div>
      </div>

      <div
        id="firebase"
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
      >
        <div className="collapse-title text-3xl font-medium">
          Why are you using `firebase`? What other options do you have to
          implement authentication?
        </div>

        <div className="collapse-content">
          <div className="divider"></div>
          <p className="indent-12 px-8 leading-relaxed text-justify py-5">
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience. When the device regains connection, the Realtime
            Database synchronizes the local data changes with the remote updates
            that occurred while the client was offline, merging any conflicts
            automatically.
            <br />
            The Realtime Database provides a flexible, expression-based rules
            language, called Firebase Realtime Database Security Rules, to
            define how your data should be structured and when data can be read
            from or written to. When integrated with Firebase Authentication,
            developers can define who has access to what data, and how they can
            access it.
            <br />
            The Realtime Database is a NoSQL database and as such has different
            optimizations and functionality compared to a relational database.
            The Realtime Database API is designed to only allow operations that
            can be executed quickly. This enables you to build a great realtime
            experience that can serve millions of users without compromising on
            responsiveness. Because of this, it is important to think about how
            users need to access your data and then structure it accordingly.
            <br />
            <br />
            <span className="text-bold text-xl">
              Alternatives to Firebase Authentication:
            </span>
            <br />
            <br />* Auth0 <br />* Passport
            <br />* Keycloak <br />* MongoDB <br />* Okta <br />* JSON Web Token
            <br />* Amazon Cognito
          </p>
        </div>
      </div>

      <div
        id="private-route"
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
      >
        <div className="collapse-title text-3xl font-medium">
          How does the private route work?
        </div>

        <div className="collapse-content">
          <div className="divider"></div>
          <p className="indent-12 px-8 leading-relaxed text-justify py-5">
            Before creating the protected route, We need to create a custom hook
            that will handle the authenticated user’s state using the Context
            API and useContext hook.
            <br />
            With the useAuth hook, we are exposing the user’s state and a couple
            of methods for user login and logout. When the user logs out, we
            redirect them to the home page using React Router’s useNavigate
            hook.
            <br />
            To persist the user’s state even on page refresh, we‘ll use the
            useLocalStorage hook which will sync the state value in the
            browser’s local storage.
            <br />
            The "(ProtectedRoute)" component will simply check the current user
            state from the useAuth hook and then redirect to the Home screen if
            the user is not authenticated.
            <br />
            To redirect the user, we use the "Navigate" component. The
            "Navigate" component changes the current location when it is
            rendered by the parent component. It uses the useNavigate hook
            internally.
            <br />
            In the App.js file, we can wrap the page component with the app.js
            "ProtectedRoute" component. For example below, we are wrapping the
            "SettingsPage" and "ProfilePage" components with 'ProtectedRoute'.
            Now when unauthenticated users try to access /profile or /settings
            path they will be redirected to the home page.
          </p>
        </div>
      </div>

      <div
        id="node"
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10 w-5/6 mx-auto"
      >
        <div className="collapse-title text-3xl font-medium">
          What is Node? How does Node work?
        </div>

        <div className="collapse-content">
          <div className="divider"></div>
          <p className="indent-12 px-8 leading-relaxed text-justify py-5">
            Node.js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node.js wastes no time or
            resources on waiting for I/O requests to return.
            <br />
            In the traditional approach to creating web servers, for each
            incoming request or connection the server spawns a new thread of
            execution or even forks a new process to handle the request and send
            a response. Conceptually, this makes perfect sense, but in practice
            it incurs a great deal of overhead.
            <br />
            Node.js takes a different approach. It runs a single-threaded event
            loop registered with the system to handle connections, and each new
            connection causes a JavaScript callback function to fire. The
            callback function can handle requests with non-blocking I/O calls,
            and if necessary can spawn threads from a pool to execute blocking
            or CPU-intensive operations and to load-balance across CPU cores.
            Node’s approach to scaling with callback functions requires less
            memory to handle more connections than most competitive
            architectures that scale with threads, including Apache HTTP Server,
            the various Java application servers, IIS and ASP.NET, and Ruby on
            Rails.
            <br />
            Node.js turns out to be quite useful for desktop applications in
            addition to servers. Also note that Node applications aren’t limited
            to pure JavaScript. You can use any language that transpiles to
            JavaScript
            <br />
            Much of Node’s utility comes from its large package library, which
            is accessible from the npm command. NPM, the Node package manager,
            is part of the standard Node.js installation, although it has its
            own website.
          </p>
        </div>
      </div>

      <div className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="md:px-60 py-20">
            <h1 className="mb-5 text-5xl font-bold">Connect With Us!</h1>
            <div className="form-control">
              <label className="input-group mt-5">
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="input input-bordered w-9/12 h-16"
                />
                <Link to="/register">
                  <span className="h-16">SIGN UP</span>
                </Link>
              </label>
            </div>
            <p className="mt-4">Receive updates & free lessons!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
