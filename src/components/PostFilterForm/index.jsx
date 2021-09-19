import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
  onSubmit: null,
};
function PostFilterForm(props) {
  const { onSubmit } = props;
  const [SearchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;
    if(typingTimeoutRef.current){
        clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
        const formValues = {
            SearchTerm: value,
          };
          onSubmit(formValues);
    }, 300);
   
  }
  return (
    <form>
      <input type="text" value={SearchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFilterForm;
