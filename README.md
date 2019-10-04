# tainter

A test harness for a new IAST SDK library.

## How to Run

1. Open `start.sh` and set the `NODE_PATH` to the folder where your IAST Agent is located.
2. If you're not running on MacOS, change the IAST Agent name.
3. Run `./start.sh`.

You should see `index.js` called with the IAST Agent attached. Once bootstrapped, you'll see the number '1' output in the console. The script will then complete and the process will shut down.

I'd like to see LveTrack hook the function `iast-sdk.taintObject()` so that when the `eval()` statement is executed, an annotation is generated. We could use this mechanism for tainting mock objects created in unit tests that would potentially be tained in the real application.
