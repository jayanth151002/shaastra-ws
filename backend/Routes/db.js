const app = express();
const router = express.Router();

router.get("/get", (req, res) => {
  return res.send("From the get Request");
});
