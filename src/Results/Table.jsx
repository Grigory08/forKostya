import "./Table.css";
import React from "react";

function Table(props){
    const name = props.name;

    return(
        <>
            <div className="table-container">
                <h2 className="table-title">{name}</h2>
                <table className="resilt-table">
                    <tbody>
                        <tr>
                            <td className="fst">1</td>
                            <td className="fst">2</td>
                            <td className="fst">3</td>
                            <td className="fst">4</td>
                            <td className="fst">5</td>
                        </tr>
                        <tr>
                            <td className="fst">16</td>
                            <td className="sec">17</td>
                            <td className="sec">18</td>
                            <td className="sec">19</td>
                            <td className="fst">6</td>
                        </tr>
                        <tr>
                            <td className="fst">15</td>
                            <td className="sec">24</td>
                            <td className="frd">25</td>
                            <td className="sec">20</td>
                            <td className="fst">7</td>
                        </tr>
                        <tr>
                            <td className="fst">14</td>
                            <td className="sec">23</td>
                            <td className="sec">22</td>
                            <td className="sec">21</td>
                            <td className="fst">8</td>
                        </tr>
                        <tr>
                            <td className="fst">13</td>
                            <td className="fst">12</td>
                            <td className="fst">11</td>
                            <td className="fst">10</td>
                            <td className="fst">9</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;