import "dotenv/config";
import express from "express";

const app = express();
const { PORT: port } = process.env;

const posts = [
  {
    id: 1,
    author: "James Bond",
    authorInitial: "JB",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    createAt: Date.now(),
    likes: parseInt(Math.random() * (100 - 55) + 55),
    comments: parseInt(Math.random() * (100 - 55) + 55)
  },

  {
    id: 2,
    author: "Kerry Harley",
    authorInitial: "KH",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam. Sit amet mattis vulputate enim. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim nec dui nunc mattis. Malesuada fames ac turpis egestas. Gravida arcu ac tortor dignissim convallis aenean et tortor. Integer eget aliquet nibh praesent tristique magna sit amet purus. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Ut pharetra sit amet aliquam id diam. Ligula ullamcorper malesuada proin libero. Justo donec enim diam vulputate. Augue lacus viverra vitae congue eu consequat. Nunc lobortis mattis aliquam faucibus purus in. Purus in massa tempor nec feugiat. Rhoncus aenean vel elit scelerisque mauris. Facilisi morbi tempus iaculis urna.`,
    createAt: Date.now(),
    likes: parseInt(Math.random() * (100 - 55) + 55),
    comments: parseInt(Math.random() * (100 - 55) + 55)
  },
  {
    id: 3,
    author: "Marc Konor",
    authorInitial: "MK",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Sit amet luctus venenatis lectus magna fringilla. Et sollicitudin ac orci phasellus egestas. Dolor sed viverra ipsum nunc aliquet bibendum. Orci eu lobortis elementum nibh tellus molestie nunc. Mi ipsum faucibus vitae aliquet nec. Libero volutpat sed cras ornare arcu dui. Aliquam sem et tortor consequat id porta nibh venenatis cras. Blandit cursus risus at ultrices mi tempus imperdiet nulla.`,
    createAt: Date.now(),
    likes: parseInt(Math.random() * (100 - 55) + 55),
    comments: parseInt(Math.random() * (100 - 55) + 55)
  },
  {
    id: 4,
    author: "Tim Barry",
    authorInitial: "TB",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper. Duis tristique sollicitudin nibh sit amet commodo nulla. Nisl condimentum id venenatis a condimentum vitae sapien. Pharetra convallis posuere morbi leo urna molestie at elementum. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Egestas congue quisque egestas diam in arcu cursus. Egestas pretium aenean pharetra magna ac placerat vestibulum. Arcu cursus euismod quis viverra nibh cras pulvinar. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.`,
    createAt: Date.now(),
    likes: parseInt(Math.random() * (100 - 55) + 55),
    comments: parseInt(Math.random() * (100 - 55) + 55)
  },
  {
    id: 5,
    author: "Arnold Switz",
    authorInitial: "AS",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet dictum sit amet. Arcu cursus euismod quis viverra nibh cras. Quisque sagittis purus sit amet volutpat consequat. Suspendisse potenti nullam ac tortor vitae. Euismod lacinia at quis risus. Nam libero justo laoreet sit amet. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Amet purus gravida quis blandit turpis cursus in hac. Sed id semper risus in hendrerit gravida rutrum. Amet nisl purus in mollis.`,
    createAt: Date.now(),
    likes: parseInt(Math.random() * (100 - 55) + 55),
    comments: parseInt(Math.random() * (100 - 55) + 55)
  },
  {
    id: 6,
    author: "Caleb Erut",
    authorInitial: "CE",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra. Arcu felis bibendum ut tristique. Orci phasellus egestas tellus rutrum tellus. Nulla aliquet porttitor lacus luctus accumsan tortor. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Amet commodo nulla facilisi nullam vehicula. Lorem ipsum dolor sit amet consectetur. Neque aliquam vestibulum morbi blandit cursus risus. In hac habitasse platea dictumst vestibulum rhoncus.`,
    createAt: Date.now(),
    likes: parseInt(Math.random() * (100 - 55) + 55),
    comments: parseInt(Math.random() * (100 - 55) + 55)
  }
];

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
