
//0xb84b12e953f5bcf01b05f926728e855f2d4a67a9  contract address on rinkeby
//deployed using remix 
pragma solidity ^0.5.12;

contract Contract {

       struct User {
        string name;
        string gender;
        uint age;
        uint hight;
        uint weight;
        string resumeHash;
    }

//    address payable owner;

    User[] public patients;


    uint numberOfPatients;
    
    constructor () public {
      owner=msg.sender;
    }


    function registerPatients(string memory _name, string memory _gender, uint _age, string memory _hight, string memory _weight, string memory _resumeHash) public {
      patients.push(User(_name, _gender, _age, _hight, _weight, _resumeHash)) -1;
      numberOfPatients++;
    }


    function getNumOfPatients() public view returns(uint) {
        return numberOfPatients;
    }


    function getPatientInfo(uint _index) public view returns (string memory, string memory, uint , string memory, string memory, string memory) {
        return (patients[_index].name, patients[_index].gender, patients[_index].age, patients[_index].hight, patients[_index].weight, patients[_index].resumeHash);
    }


    function getPatientResume(string memory _hash) public payable {
      require(bytes(_hash).length==46); //ipfs hash길이 46 확인
      owner.transfer(msg.value);
 
    }



}