# Ethereum supply chain management DApp

### Contract Information

Contract Address: 0xb128262c843a2b36FF873Fed7d7334b508641b1e
[Contract Etherscan Link](https://rinkeby.etherscan.io/address/0xb128262c843a2b36FF873Fed7d7334b508641b1e)

Contract Deployment Transaction hash: 0xa72b6135020b2556ffe4235c2a97bf70e84dafa74b4d65ad53462d954ddc1d5e

---

## Usage Instructions:
* Farmer:
  * Harvest an Item:
    * Enter a new unique UPC into the form and press "Fetch Data 1".
    * If Current owner shows as "0x00 . . ." then this UPC is new and unique.
    * Continue to enter farm information into the "Farm Details" section.
    * Add "Product Notes" into "Product Details" section".
    * Press "Harvest" button and verify transaction in Metamask.
  * Process an item:
    * Enter the UPC you wish to modify into the "UPC" field on the form and press "Fetch Data 1".
    * If this is the correct item, press "Process" and verify transaction in Metamask.
  * Pack an item:
    * Enter the UPC you wish to modify into the "UPC" field on the form and press "Fetch Data 1".
    * If this is the correct item, press "Pack" and verify transaction in Metamask.
  * Place an item up for sale:
    * Enter the UPC you wish to modify into the "UPC" field on the form and press "Fetch Data 1" and "Fetch Data 2".
    * If this is the correct item, enter your desired price into the "Product Price" field.
    * Press the "ForSale" button and verify transaction in Metamask, your item is now up for sale.

* Distributor:
  * Buy an item:
    * Enter the UPC of the item you wish to buy into the "UPC" field on the form and press "Fetch Data 1" and "Fetch Data 2".
    * Verifiy this is the item you wish to purchase for distribution.
    * Press "Buy" button and verify transaction in Metamask.
  * Ship an item:
    * Enter the UPC you wish to modify into the "UPC" field on the form and press "Fetch Data 1" and "Fetch Data 2".
    * Press the "Ship" button and verify the tranasaction in Metamask.

* Retailer:
  * Receive an item:
    * Enter the UPC you wish to receive into the "UPC" field on the form and press "Fetch Data 1" and "Fetch Data 2".
    * Press the "Receive" button and verify the transaction in Metamask.

* Consumer:
  * Purchase an item:
    * Enter the UPC you wish to receive into the "UPC" field on the form and press "Fetch Data 1" and "Fetch Data 2".
    * Press the "Purchase" button and verify the transaction in Metamask. 

### Libraries Used

Only additional library used was truffle-assertions to make event testing easier and be compatible with Truffle 5.

### Node / Truffle / Web3 Info

Node 10.15.3
Truffle 5.0.26
Web3 1.0.0-beta

### UML Diagrams
![Activity Diagram](https://raw.githubusercontent.com/waldrupm/EthSupplyChain/master/UML/ActivityDiagram.png)
## Sequence Diagram
![Sequence Diagram](https://raw.githubusercontent.com/waldrupm/EthSupplyChain/master/UML/SequenceDiagram.png)
![State Diagram](https://raw.githubusercontent.com/waldrupm/EthSupplyChain/master/UML/StateDiagram.png)
![Data Diagram](https://raw.githubusercontent.com/waldrupm/EthSupplyChain/master/UML/SupplyChainDataDiagram.png)
