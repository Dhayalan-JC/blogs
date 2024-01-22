import React, { Component } from "react";

export class PostSection extends Component {
  render() {
    return (
      <>
        <div className="pageTitle">
          <h3 className="emphasis">From the Firehouse</h3>
        </div>
        <hr />
        <div>
          <section>
            <h2>Sample Blog Post</h2>
            <p>
              This blog post shows a few different types of content that's
              supported and styled with Bootstrap. Basic typography, images, and
              code are all supported.
            </p>
            <hr />
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
              sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
              at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              Curabitur blandit tempus porttitor. Nullam quis risus eget urna
              mollis ornare vel eu leo. Nullam id dolor id nibh ultricies
              vehicula ut id elit.
            </p>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet Aenean lacinia nulla sed
            </p>
          </section>
          <section>
            <h2>Heading</h2>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </section>
          <section>
            <h2>Sub-heading</h2>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Example code block
            </p>
            <p>
              'Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
              malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
              commode, tortor mauris condimentum nibh, ut fermentum massa.
            </p>
          </section>
          <section>
            <h2>Sub-heading</h2>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus.
            </p>
            <ul>
              <li>
                Praesent commodo cursus magna, vel scelerisque nis! consectetur
                et.
              </li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>
              Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
              elit libero, a pharetra augue.
            </p>
            <ol>
              <li>Vestibulum id ligula porta felis euismod semper.</li>
              <li>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </li>
              <li>
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </li>
            </ol>
            <p>Cras mattis purus sit amet Sed posuere tur est at lobortis.</p>
          </section>
          <section>
            <h2>Another blog post</h2>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
              sem lacinia quam venenatis vestibulum. Sed posuere consectetur est
              at lobortis. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              Curabitur blandit tempus porttitor. Nullam quis risus eget urna
              mollis ornare vel eu leo. Nullam id dolor id nibh ultricies
              vehicula ut id elit.
            </p>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet Aenean lacinia nulla sed
            </p>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </section>
          <section className="mb-4">
            <h2>New feature</h2>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
              dapibus, tellus ac cursus , tortor mauris im nibh, ut massa justo
              sit amet risus.
            </p>
            <ul>
              <li>
                Praesent commodo cursus magna, vel scelerisque nis! consectetur
                et.
              </li>
              <li>Donec id elit non mi porta gravida at eget metus.</li>
              <li> Nulla vitae elit libero, a pharetra augue.</li>
            </ul>
            <p>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis
              consectetur purus sit amet Aenean lacinia nulla sed
            </p>
          </section>
          <section className="mb-5">
            <button className="btn btn-outline-primary  btn-round btn-md">
              Older
            </button>
            <button className="btn btn-default  btn-round">Newer</button>
          </section>
        </div>
      </>
    );
  }
}

export default PostSection;
