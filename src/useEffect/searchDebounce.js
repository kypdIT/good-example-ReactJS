import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

searchDebounce.propTypes = {
  onSubmit: PropTypes.func,
};

searchDebounce.defaultProps = {
  onSubmit: null,
};

function searchDebounce(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  //Bien Tam - giu nguyen gia tri sau moi lan render
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    //khi bam 1 phim thi setTimeout se duoc xet lai, se bi cong don tich lai khi go nhieu phim
    //vi vay can xoa timeout cu di, set lai 1 timeout moi khi gia 0.5s
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    //go phim neu dung lai 0.5 giay thi moi submit
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        serachTerm: value,
      };
      onSubmit(formValues);
    }, 500);
  }

  return (
    <div>
      <from>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </from>
    </div>
  );
}

export default searchDebounce;
