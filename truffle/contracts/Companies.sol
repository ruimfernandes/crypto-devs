// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Companies {
  uint256 public company_count = 0;

    struct Company {
        uint256 id;
        string name;
        uint funds;
    }

    mapping(uint256 => Company) public companies;

    event CompanyCreated(uint id, string name, uint funds);

    constructor() public {
        createCompany("Rui's company");
    }

    function createCompany(string memory name) public {
        company_count++;
        companies[company_count] = Company(company_count, name, 1000);
        emit CompanyCreated(company_count, name, 1000);
    }
}
