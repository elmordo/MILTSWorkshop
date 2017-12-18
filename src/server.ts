import * as Hapi from "hapi"
import * as Inert from "inert"


let server: Hapi.Server = new Hapi.Server({
    host: "localhost",
    port: 8080
});


async function startServer()
{
    await server.register(Inert);
    server.start(function (): void
    {
        console.log("prdel");
    });
}



server.route({
    method: "GET",
    path: "/",
    handler: function (request, reply): string
    {
        return reply.file("assets/index.html");
    }
});

server.route({
    method: "GET",
    path: "/app.js",
    handler: function (request, reply): string
    {
        return reply.file("assets/app.js");
    }
})

console.log("running server");

startServer().then(() =>
{
    console.log("Process finished");
});
