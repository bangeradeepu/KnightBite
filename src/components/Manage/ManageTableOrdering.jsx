import React, { useState, useEffect } from "react";
import "./ManageTableOrdering.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const ManageTableOrdering = () => {
  const TableData = [
    {
      id: 1,
      seqName: "First Floor",
      noTable: "5",
      sequence: [
        { id: 1, tableSeq: "F-1" },
        { id: 2, tableSeq: "F-2" },
        { id: 3, tableSeq: "F-3" },
        { id: 4, tableSeq: "F-4" },
        { id: 5, tableSeq: "F-5" },
      ],
    },
    {
      id: 2,
      seqName: "Second Floor",
      noTable: "10",
      sequence: [
        { id: 1, tableSeq: "S-1" },
        { id: 2, tableSeq: "S-2" },
        { id: 3, tableSeq: "S-3" },
        { id: 4, tableSeq: "S-4" },
        { id: 5, tableSeq: "S-5" },
        { id: 6, tableSeq: "S-6" },
        { id: 7, tableSeq: "S-7" },
        { id: 8, tableSeq: "S-8" },
        { id: 9, tableSeq: "S-9" },
        { id: 10, tableSeq: "S-10" },
      ],
    },
    {
      id: 3,
      seqName: "Third Floor",
      noTable: "6",
      sequence: [
        { id: 1, tableSeq: "T-1" },
        { id: 2, tableSeq: "T-2" },
        { id: 3, tableSeq: "T-3" },
        { id: 4, tableSeq: "T-4" },
        { id: 5, tableSeq: "T-5" },
        { id: 6, tableSeq: "T-6" },
      ],
    },
  ];

  // State to track the number of visible tableSeq items for each floor
  const [visibleTableSeq, setVisibleTableSeq] = useState({});
  const [isLoadMore, setIsLoadMore] = useState({});

  const handleLoadToggle = (floorId) => {
    if (isLoadMore[floorId]) {
      // Show all tableSeq items for the specific floor
      setVisibleTableSeq((prev) => ({
        ...prev,
        [floorId]: TableData.find((floor) => floor.id === floorId).sequence
          .length,
      }));
    } else {
      // Show only 3 tableSeq items for the specific floor
      setVisibleTableSeq((prev) => ({ ...prev, [floorId]: 3 }));
    }
    // Toggle the state for the specific floor
    setIsLoadMore((prev) => ({ ...prev, [floorId]: !prev[floorId] }));
  };

  //   Open create new
  const [createOpen, setCreateOpen] = React.useState(false);

  const handleClickCreateOpen = () => {
    setCreateOpen(true);
  };

  const handleCreateClose = () => {
    setCreateOpen(false);
  };


//   popup create sequence logic
  const [numberOfTables, setNumberOfTables] = useState(0);
  const [mode, setMode] = useState("Manual");
  const [prefix, setPrefix] = useState("");
  const [sequenceType, setSequenceType] = useState("Numeric");
  const [autoValues, setAutoValues] = useState([]);

  const handleNumberOfTablesChange = (e) => {
    setNumberOfTables(e.target.value);
  };
  useEffect(() => {
    // Generate auto values based on the selected prefix and sequence type
    if (mode === "Auto") {
      const values = Array.from({ length: numberOfTables }, (_, index) => {
        if (sequenceType === "Numeric") {
          return `${prefix}-${index + 1}`;
        } else if (sequenceType === "Alphabet") {
          // Convert index to alphabet (A, B, C, ...)
          const alphabetValue = String.fromCharCode("A".charCodeAt(0) + index);
          return `${prefix}-${alphabetValue}`;
        }
        return "";
      });
      setAutoValues(values);
    }
  }, [mode, prefix, sequenceType, numberOfTables]);
  return (
    <div className="ManageTableOrdering r-f-12">
      <div className="MTO-desktop">
        <div className="MTO-layer">
          <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Table Ordering</div>
            </div>
            <div>
              <button
                className="p-button bg-purple"
                onClick={handleClickCreateOpen}
              >
                Add Table Sequence
              </button>
            </div>
          </div>
          <table className="MTO-borderless-table mt-4">
            <tr>
              <th>Sl.No</th>
              <th>Sequence Name</th>
              <th>No. Of Tables</th>
              <th>Sequence</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {TableData.map((floor) => (
              <tr key={floor.id}>
                <td>{floor.id}</td>
                <td>{floor.seqName}</td>
                <td>{floor.noTable}</td>
                <td>
                  {floor.sequence.length > 5
                    ? floor.sequence
                        .slice(0, visibleTableSeq[floor.id])
                        .map((table) => table.tableSeq)
                        .join(", ")
                    : floor.sequence.map((table) => table.tableSeq).join(", ")}
                  &nbsp;
                  {floor.sequence.length > 5 && (
                    <span
                      className="txt-orange r-f-10 c-pointer"
                      onClick={() => handleLoadToggle(floor.id)}
                    >
                      {isLoadMore[floor.id] ? "Load all" : "Load Less"}
                    </span>
                  )}
                </td>

                <td>
                  <FontAwesomeIcon
                    icon={faPen}
                    className="txt-dark-grey c-pointer"
                  />
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="txt-dark-grey c-pointer"
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <Dialog
        open={createOpen}
        onClose={handleCreateClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <div className="d-flex space-evenly align-text-center">
            <div>
              <div className="f-w-700">Add new Table Sequence</div>
              <table className="MTO-borderless-table-popup mt-4">
                <tr>
                  <td className="align-text-right">Sequence Name</td>
                  <td>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MTO-textfield"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-text-right">No Of Tables</td>
                  <td>
                    <input
                      type="number"
                      value={numberOfTables}
                      onChange={handleNumberOfTablesChange}
                      className="MTO-textfield"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="align-text-right">Sequence Type</td>
                  <td>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="MTO-textfield-dd"
                    >
                      <option value="Manual">Manual</option>
                      <option value="Auto">Auto</option>
                    </select>
                  </td>
                </tr>
              </table>
              <div className="MTO-sequence-selection-box mt-2">
                <div className="f-w-500">Sequence</div>
                {mode === "Auto" && (
                  <div className="d-flex space-evenly mt-2">
                    <div className="d-flex align-item-center g-10">
                      <div className="r-f-10">Prefix</div>
                      <div>
                        <input
                          type="text"
                          value={prefix}
                          onChange={(e) => setPrefix(e.target.value)}
                          className="MTO-prefix-field"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-item-center g-10">
                      <div className="r-f-10">Sequence</div>
                      <div>
                        <select
                          value={sequenceType}
                          onChange={(e) => setSequenceType(e.target.value)}
                          className="MTO-squence-dropdown-field"
                        >
                          <option value="Numeric">Numeric</option>
                          <option value="Alphabet">Alphabet</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                <div className="d-flex space-evenly mt-2">
                  <div>
                    {mode === "Auto" ? (
                      <table  className="MTO-sequence-table">
                        <tbody>
                          {autoValues.map((value, index) => (
                            <tr key={index}>
                              <td className="align-text-right">{`Table ${
                                index + 1
                              }`}</td>
                              <td>
                                <input
                                  type="text"
                                  value={value}
                                  className="MTO-sequence-textfield"
                                  
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div>
                        {/* Render manual input fields based on the number of tables */}
                        {Array.from({ length: numberOfTables }, (_, index) => (
                          <div key={index}>
                           <table className="MTO-sequence-table">
                            <tr>
                                <td className="align-item-right">{`Table ${index + 1}`}</td>
                                <td>
                                <input
                              type="text"
                              name={`table${index + 1}`}
                              id={`table${index + 1}`}
                              className="MTO-sequence-textfield"
                            />
                                </td>
                            </tr>
                           </table>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button className="p-button bg-purple mt-2">
                &nbsp;&nbsp;&nbsp;Done&nbsp;&nbsp;&nbsp;
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="MTO-mobile">
      <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Table Ordering</div>
          <button className="p-button bg-purple" onClick={handleClickCreateOpen}>Add Table Sequence</button>
        </div>
        <div className="ADD-p-position" style={{marginTop:'32vh'}}>
          <div className="ADD-p-container">
          {TableData.map((floor) => (
                <div className="MTO-box-phone" key={floor.id}>
                <div className="d-flex">
                    <div className="flex-1">
                        <div className="r-f-8 txt-grey">Sl.No</div>
                        <div className="r-f-10">{floor.id}</div>
                    </div>
                    <div className="flex-1">
                        <div className="r-f-8 txt-grey">Sequence Name</div>
                        <div className="r-f-10">{floor.seqName}</div>
                    </div>
                    <div className="flex-1">
                        <div className="r-f-8 txt-grey">No. Of Tables</div>
                        <div className="r-f-10">{floor.noTable}</div>
                    </div>
                </div>
                <div className="d-flex mt-2 space-between align-item-center">
                   <div>
                   <div className="r-f-8 txt-grey">Sequence</div>
                        <div className="r-f-10">
                        {floor.sequence.length > 5
                    ? floor.sequence
                        .slice(0, visibleTableSeq[floor.id])
                        .map((table) => table.tableSeq)
                        .join(", ")
                    : floor.sequence.map((table) => table.tableSeq).join(", ")}
                  &nbsp;
                  {floor.sequence.length > 5 && (
                    <span
                      className="txt-orange r-f-10 c-pointer"
                      onClick={() => handleLoadToggle(floor.id)}
                    >
                      {isLoadMore[floor.id] ? "Load all" : "Load Less"}
                    </span>
                  )}
                        </div>
                   </div>
                   <div className="d-flex g-20">
                    <div>
                    <FontAwesomeIcon
                    icon={faPen}
                    className="txt-dark-grey c-pointer"
                  />
                    </div>
                    <div>
                    <FontAwesomeIcon
                    icon={faTrash}
                    className="txt-dark-grey c-pointer"
                  />
                    </div>
                   </div>
                    
                    
                </div>
                </div>
          ))}
            </div>
            </div>
      </div>
    </div>
  );
};

export default ManageTableOrdering;
