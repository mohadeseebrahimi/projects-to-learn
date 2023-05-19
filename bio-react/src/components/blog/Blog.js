import "./Blog.css";
import BlogItem from "./BlogItem";
import img1 from "../../assets/images/post-1.jpg"
import img2 from "../../assets/images/post-2.jpg";
import img3 from "../../assets/images/post-3.jpg";



function Blog() {
    let blogs = [
        {
            blogImage : img1,
            blogTitle : 'post title1',
            blogDesc : '(1)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            blogAuthor : 'natural travel',
            blogTime : 5
        },
        {
            blogImage : img2,
            blogTitle : 'post title2',
            blogDesc : '(2)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            blogAuthor : 'helthy foods',
            blogTime : 10
        },
        {
            blogImage : img3,
            blogTitle : 'post title3',
            blogDesc : '(3)Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            blogAuthor : 'work office',
            blogTime : 7
        }
    ]
  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          <BlogItem {...blogs[0]}/>
          <BlogItem {...blogs[1]}/>
          <BlogItem {...blogs[2]}/>
        </div>
      </div>
    </section>
  );
}
export default Blog;