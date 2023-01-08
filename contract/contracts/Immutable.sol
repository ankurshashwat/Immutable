// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Immutable {
    // Defined a struct to store necessary data for the First Information Report
    struct FIR {
        address sender;
        uint aadhar;
        string fullname;
        uint contact;
        string place;
        uint date;
        uint time;
        string offence;
        string witness;
        string complaint;
    }

    // Declared a mapping to store multiple instances of the FIR struct
    mapping(uint => FIR) public Reports;

    // Counter to assign unique IDs to each FIR
    uint public count = 0;

    // Event to be emitted when a new FIR is logged
    event NewFIR(uint Id, address sender);

    // Function to File FIR to the mapping
    function FileFIR(
        address _sender,
        uint _aadhar,
        string memory _fullname,
        uint _contact,
        string memory _place,
        uint _date,
        uint _time,
        string memory _offence,
        string memory _witness,
        string memory _complaint
    ) external {
        // Assign a unique Id to the new FIR
        count++;
        uint Id = count;

        // Store the FIR in the mapping
        Reports[Id] = FIR(
            _sender,
            _aadhar,
            _fullname,
            _contact,
            _place,
            _date,
            _time,
            _offence,
            _witness,
            _complaint
        );

        // Emit the NewFIR event
        emit NewFIR(Id, _sender);
    }

    // Function to retrieve FIR by ID
    function fetchFIR(
        uint Id
    )
        public
        view
        returns (
            address,
            uint,
            string memory,
            uint,
            string memory,
            uint,
            uint,
            string memory,
            string memory,
            string memory
        )
    {
        // Retrieve the FIR from the mapping
        FIR storage report = Reports[Id];

        // Return the FIR's Data
        return (
            report.sender,
            report.aadhar,
            report.fullname,
            report.contact,
            report.place,
            report.date,
            report.time,
            report.offence,
            report.witness,
            report.complaint
        );
    }
}