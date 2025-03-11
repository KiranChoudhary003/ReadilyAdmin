import React, { useState } from "react";
import Wrapper from "./style";
import required from '../../assets/required.png'
import { FaPlus } from "react-icons/fa";

const ContentOption = () => {
  const [isActive, setIsActive] = useState(false)
  const [formData, setFormData] = useState({type: "" })
  const [dataList, setDataList] = useState([])

  const handleActivation = () => {
    setIsActive(true)
  }

  const handleClose = () => {
    setIsActive(false)
    setFormData({type: "" })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    if (formData.type) {
      const newData = {
        id: dataList.length + 1,
        type: formData.type,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      }

      setDataList([...dataList, newData]);
      setIsActive(false);
      setFormData({type: "" })
    }
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <h1>Content Option</h1>
          <button className="add-btn" onClick={handleActivation}>
            + Add
          </button>
        </div>

        {isActive && (
          <div className="modal-overlay">
            <div className="modal">
              <h2><FaPlus />Add Content</h2>
              <div>
              <span>Type</span>
              <img src={required} alt="Required"/>
                </div>
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="" disabled>
                  -- Select Option --
                </option>
                <option value="Article">Article</option>
                <option value="Video">Video Link</option>
                <option value="Link">Link</option>
              </select>
              <div className="btn-group">
                <button onClick={handleSave}>Save</button>
                <button className="close-btn" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Type</th>
              <th>Created Date</th>
              <th>Updated Date</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default ContentOption;
