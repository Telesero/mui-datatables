import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Remove from '@material-ui/icons/Remove';

const ExpandButton = ({
  areAllRowsExpanded,
  buttonClass,
  expandableRowsHeader,
  expandedRows,
  iconClass,
  iconIndeterminateClass,
  isHeaderCell,
  onExpand,
}) => {
  return (
    <>
      {isHeaderCell && !areAllRowsExpanded() && areAllRowsExpanded && expandedRows.data.length > 0 ? (
        <IconButton
          onClick={onExpand}
          style={{ padding: 0 }}
          disabled={expandableRowsHeader === false}
          className={buttonClass}>
          <Remove id="expandable-button" className={iconIndeterminateClass} />
        </IconButton>
      ) : (
        <IconButton
          onClick={onExpand}
          style={{ padding: 0 }}
          disabled={expandableRowsHeader === false}
          className={buttonClass}>
          <KeyboardArrowRight id="expandable-button" className={iconClass} />
        </IconButton>
      )}
    </>
  );
};

export default ExpandButton;
