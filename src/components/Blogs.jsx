
const Blogs = () => {
    return (
        <div className="mt-10 mx-5 text-green-950">
            <h2 className="text-3xl font-semibold text-black">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className="text-xl"><span className="text-2xl text-bold underline">Access Token: </span> Access token are temporary credentials that grant access to a protected resources.
                An access token is a credential used by applications to access protected resources on behalf of a user. It&apos;s commonly used in authentication and authorization mechanisms, particularly in the context of OAuth (Open Authorization) and similar protocols.The access token is used for accessing protected resources until it expires. <br />
                <span className="text-2xl text-bold underline" >Refresh Token: </span>A refresh token is a special kind of token that is used to generate a new access token. A refresh token just helps you re-validate a user without them having to re-render their login credentials multiples time. It&apos;s like a spare key that lets users obtain a new key (access token) once the old one expires, without the users needing to re-authenticate. These tokens are crucial for long-term authentication and provide a seamless user experience, particularly in mobile and web applications where users expect to remain logged in across sessions. <br />
                Initially, the client redirects the user to an authentication server, where the user logs in and grants permissions to the client.
                After successful authentication, the authentication server issues both an access token and a refresh token to the client.
                The client stores the access token securely (usually in httpOnly cookies or local storage) and uses it to access protected resources.
                When the access token expires, the client can use the refresh token to request a new access token from the authentication server without requiring the user to log in again.
                The authentication server verifies the refresh token and issues a new access token to the client. <br />
                <span  className="text-2xl text-bold underline">We should store them: </span>Access token and refresh token shouldn&apos;t be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie and I need it for most of my requests to the Resource Server anyway.We can also store access token in localStorage but is is not secure and recommended. <br />

                Storing refresh tokens on the client-side is generally not recommended due to security concerns. which are long-lived tokens that can be used to obtain new access tokens, which are short-lived tokens that grant access to resources. Refresh tokens are usually stored securely on the server side.Nevertheless, if we want we can store refresh token in: <br />
                1. Storing the refresh token in an in-memory JavaScript variable
                2. Storing the access token in session storage and sending it via a Bearer access_token authorization header to our resource server. Then we can use httpOnly cookies for the refresh token.
                3. Keep both tokens in httpOnly cookies which has the mentioned drawback that both tokens are exposed to the same attack vector.
            </p>
            <h2 className="text-3xl font-semibold text-black">2. Compare SQL and NoSQL databases?</h2>
            <p className="text-xl">
                Structured query language (SQl) is a programming language for storing and processing information in a relation database. A relation database stores information in tabular form, with rows and columns representing different data attributes and various relationships between the data value.We can use SQL statements to store, update, remove, search, and retrieve information from the database. <br />
                NoSQL database are purpose built for modules and have flexible schemas for building modern applications.NoSQL database is a document , graph database. <br />
                <ul>
                    <li> 1. SQL databases are relational, and NoSQL databases are non-relational.</li>
                    <li>2. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    </li>
                    <li>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </ul>
            </p>
            <h2 className="text-3xl font-semibold text-black">3. What is express js? What is Nest JS ?</h2>
            <p className="text-xl">
                <span className="text-2xl text-bold underline">Express Js: </span> Express js is a framework for node with features and tools to simplify the server-side development.It is used to built a single page , multi-page and hybrid web application.Express js makes it easier to organize your applications functionality with middleware and routes. <br />
                <span  className="text-2xl text-bold underline">Next js: </span>Nest.JS is a framework for building efficient and scalable server-side applications using JavaScript or TypeScript. It is built on top of the widely popular Node.js runtime and leverages its asynchronous, event-driven nature to provide a robust and reliable platform for developing web applications.NestJs is created for monoliths as well as microservices. You can build Rest APIs, MVC applications, GraphQL applications, Web Sockets, or CLIs, and CRON jobs with it. 

            </p>
            <h2 className="text-3xl font-semibold text-black">What is MongoDB aggregate and how does it work ?</h2>
            <p className="text-xl">
            MongoDB&apos;s aggregate function is a powerful tool for performing data aggregation operations within a MongoDB collection. It allows you to process and analyze data across multiple documents in a collection and perform operations like filtering, grouping, sorting, and transforming data.Aggregation in MongoDB allows for the transforming of data and results in a more powerful fashion than from using the find() command. Through the use of multiple stages and expressions, you are able to build a &quot;pipeline&quot; of operations on your data to perform analytic operations.
            MongoDB Aggregation uses an aggregate() method to perform the aggregation operations. Basically, this aggregation operation practices data records and provides calculated results. The aggregation operations assemble values from various documents together and are able to execute a range of operations, such as average, sum, maximum, minimum, etc., on the assembled data to provide only a result.
            </p>
        </div>
    );
};

export default Blogs;