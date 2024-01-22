import React from "react";

export const Footer = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="col-sm-12 text-center mt-4">
            <p>
              Blog template built for <strong>Bootrsap</strong> by
              <strong> @mdo</strong>
            </p>
            <a href="/" onClick={handleScrollTop}>
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
