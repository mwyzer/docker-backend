"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _morgan = /*#__PURE__*/ _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.get("/", (req, res)=>{
    res.json({
        hello: "world"
    });
});
const port = Number(process.env.PORT ?? 8000);
app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server started at http://localhost:${port}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IG1vcmdhbiBmcm9tIFwibW9yZ2FuXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcblxuYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5qc29uKHsgaGVsbG86ICd3b3JsZCcgfSlcbn0pO1xuXG5jb25zdCBwb3J0ID0gTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQgPz8gODAwMCk7XG5hcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgc3RhcnRlZCBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKVxufSkiXSwibmFtZXMiOlsiYXBwIiwiZXhwcmVzcyIsInVzZSIsIm1vcmdhbiIsImdldCIsInJlcSIsInJlcyIsImpzb24iLCJoZWxsbyIsInBvcnQiLCJOdW1iZXIiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OzhEQUFvQjs2REFDRDs7Ozs7O0FBRW5CLE1BQU1BLE1BQU1DLElBQUFBLGdCQUFPO0FBRW5CRCxJQUFJRSxHQUFHLENBQUNDLElBQUFBLGVBQU0sRUFBQztBQUVmSCxJQUFJSSxHQUFHLENBQUMsS0FBSyxDQUFDQyxLQUFLQyxNQUFRO0lBQ3ZCQSxJQUFJQyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFRO0FBQzlCO0FBRUEsTUFBTUMsT0FBT0MsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxJQUFJLElBQUk7QUFDeENiLElBQUljLE1BQU0sQ0FBQ0wsTUFBTSxXQUFXLElBQU07SUFDOUJNLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLG1DQUFtQyxFQUFFUCxLQUFLLENBQUM7QUFDNUQifQ==