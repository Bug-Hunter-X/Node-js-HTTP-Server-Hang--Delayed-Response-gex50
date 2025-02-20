# Node.js HTTP Server Hang: Delayed Response

This repository demonstrates a subtle bug in a Node.js HTTP server where a delayed response can cause the server to hang if the `writeHead` method isn't called promptly.  This is an uncommon issue, as it's often masked by other errors or only appears under specific load conditions. 

## Bug Description:
The `bug.js` file contains a simple HTTP server that intentionally delays sending the response. Without `res.writeHead()` being called near the beginning, this delay results in a hanging request. This happens because Node.js's event loop isn't properly handled without initial response headers.

## Solution:
The `bugSolution.js` file demonstrates the solution: always send `res.writeHead()` as early as possible in your response handling to avoid this issue.  Even if the response body is delayed, this ensures the client receives the status code and headers promptly.

## How to Reproduce:
1. Clone this repository.
2. Navigate to the cloned directory.
3. Run `node bug.js`.  Send a request to `http://localhost:3000`. The request will hang.
4. Run `node bugSolution.js`. Send a request to `http://localhost:3000`. The request will complete successfully.