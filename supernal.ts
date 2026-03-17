import { writeFileSync } from "fs";


writeFileSync('./blah.json', JSON.stringify({ helo: "world" }));
