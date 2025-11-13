/* ================================
   QUIZ AND TEST SCRIPT
================================ */

// ======== QUESTIONS JSON (one line each) ========
const questions = [
  { question: " UNIT 1 What is the primary role of a freight forwarder?", options: ["To manufacture goods for international trade.", "To act as an intermediary organizing transport and ancillary services.", "To provide financial loans to importers.", "To set international trade laws."], correct: 1 },
{ question: "In trade and forwarding activities, who is the consignor?", options: ["The receiver of the goods.", "The person who purchases the goods.", "The sender of the goods.", "The carrier of the goods."], correct: 2 },
{ question: "Which of the following is NOT a typical service offered by a freight forwarder?", options: ["Customs clearance", "Procuring insurance", "Manufacturing the goods", "Storage and handling"], correct: 2 },
{ question: "According to FIATA model rules, when is a freight forwarder NOT liable for the acts of third parties?", options: ["Always liable for third parties.", "Only when the third party is a subcontractor.", "When it has failed to exercise due diligence in selecting them.", "When the goods are perishable."], correct: 2 },
{ question: "A freight forwarder acts as a principal when:", options: ["They only give advice to the shipper.", "They undertake the transport in their own name and on their own account.", "They act solely as an agent for the carrier.", "They only handle documentation."], correct: 1 },
{ question: "Which expertise is crucial for a freight forwarder in 'Statutory Compliance'?", options: ["Knowledge of geography", "Knowledge of dangerous goods and customs", "Ability to calculate exchange rates", "Skills in marketing"], correct: 1 },
{ question: "What does 'Risk Management' expertise in forwarding include?", options: ["Designing the product packaging", "Advice on exchange rates and traffic hindrances", "Manufacturing the goods", "Selling goods directly to consumers"], correct: 1 },
{ question: "What is a key component of 'Finance and Payment' expertise for a forwarder?", options: ["Designing the company's logo", "Accuracy in documentary and financial transactions", "Managing the buyer's retail shop", "Creating advertisements"], correct: 1 },
{ question: "What is a sale contract?", options: ["A document only for domestic trade.", "An agreement that creates duties and rights for the parties involved.", "A document used only for insurance claims.", "A single document used for all types of goods."], correct: 1 },
{ question: "Which of these is an 'Official Document' in international trade?", options: ["Bill of Lading", "Certificate of Origin", "Bill of Exchange", "House Bill of Lading"], correct: 1 },
{ question: "The party who purchases goods and pays the purchase price is the:", options: ["Seller", "Consignor", "Buyer", "Carrier"], correct: 2 },
{ question: "A broker in international trade primarily:", options: ["Manufactures the goods.", "Conducts negotiations on behalf of buyers and sellers.", "Provides insurance for the goods.", "Acts as the ultimate consignee."], correct: 1 },
{ question: "The legal position of a freight forwarder involves relationships with all EXCEPT:", options: ["Sellers and buyers", "Carriers", "Insurers", "The forwarder's family members"], correct: 3 },
{ question: "Under FIATA rules, a forwarder's liability as a principal for storage services arises when:", options: ["The service is performed by a third party without the forwarder's knowledge.", "The service is performed using the forwarder's own facilities.", "The customer packs the goods themselves.", "The goods are in transit by air."], correct: 1 },
{ question: "Which of these is part of 'Cross-Functional Integration' expertise?", options: ["Knowledge of IT systems", "Supply chain management", "Advice on traffic hindrances", "Calculating freight charges only"], correct: 1 },
{ question: "What does 'Know-how in geography' for a forwarder entail?", options: ["Knowing the capital cities of all countries.", "Understanding trade routes, ports, and transport infrastructure.", "Drawing world maps from memory.", "Speaking multiple languages fluently."], correct: 1 },
{ question: "Which item in a trade contract determines who is responsible for carriage?", options: ["Description of goods", "Terms of delivery (e.g., INCOTERMS)", "Quantity of goods", "Applicable law"], correct: 1 },
{ question: "What is the core duty of a freight forwarder according to the 'due care' standard?", options: ["To guarantee the lowest price.", "To exercise due diligence and take reasonable measures.", "To deliver goods faster than competitors.", "To manufacture the goods being shipped."], correct: 1 },
{ question: "Which document is a transport document?", options: ["Commercial Invoice", "Packing List", "Air Waybill", "Certificate of Origin"], correct: 2 },
{ question: "The 'Required Expertise' for a forwarder includes knowledge of all modes of transport and:", options: ["Product design.", "Goods requirements and IT.", "Retail sales strategies.", "Agricultural techniques."], correct: 1 },
{ question: "Who is the receiver of the goods in a forwarding transaction?", options: ["Consignor", "Shipper", "Consignee", "Seller"], correct: 2 },
{ question: "Forwarding services, as defined by FIATA, include:", options: ["Retail marketing of the goods.", "Carriage, consolidation, storage, and packing.", "Manufacturing and production planning.", "After-sales service and warranty claims."], correct: 1 },
{ question: "A freight forwarder acting as an intermediary organizes services:", options: ["For and on the account of the carrier.", "In their own name for and on account of the customer.", "Only for government projects.", "Exclusively for air freight."], correct: 1 },
{ question: "The basis of a freight forwarder's liability as a principal includes responsibility for:", options: ["Acts and omissions of their own employees only.", "Acts and omissions of the consignee.", "Acts and omissions of third parties they engaged.", "Global currency fluctuations."], correct: 2 },
{ question: "'Supply Chain Management' is a component of which required expertise?", options: ["Transport Modes and Geography", "Statutory Compliance", "Cross-Functional Integration", "Finance and Payment"], correct: 2 },
{ question: "Which of these is a 'Banking and Insurance Document'?", options: ["Packing List", "Bill of Lading", "Letter of Credit", "Commercial Invoice"], correct: 2 },
{ question: "The description of goods in a contract is relevant for the forwarder because it determines:", options: ["The buyer's credit rating.", "Cargo handling and transport mode.", "The seller's profit margin.", "The date of the national holiday."], correct: 1 },
{ question: "The FIATA model rules are primarily concerned with:", options: ["Setting international interest rates.", "Defining the freight forwarder's liability and duties.", "Regulating stock market exchanges.", "Designing new aircraft models."], correct: 1 },
{ question: "What is the significance of the 'Terms of Payment' in a contract for a forwarder?", options: ["It determines the forwarder's salary.", "It dictates which transport document proves delivery and is decisive for payment.", "It specifies the color of the packaging.", "It sets the rules for employee vacations."], correct: 1 },
{ question: "The interaction between international trade and forwarding is best described as:", options: ["Two completely separate fields.", "Interrelated, where trade creates the need for forwarding services.", "Identical and interchangeable terms.", "Only relevant for sea transport."], correct: 1 },
////////////////////////////////////////////////
{ question: "UNIT 2 What makes international trade riskier than domestic trade?", options: ["Shorter distances and single currency.", "Longer distances, different currencies, and legal frameworks.", "Identical cultures and languages.", "Simplified documentation processes."], correct: 1 },
{ question: "Which of the following is a 'transport risk' in foreign trade?", options: ["Risk of non-acceptance", "Risk of non-performance", "Damage or loss of goods during transit", "Political instability"], correct: 2 },
{ question: "How can companies handle international trade risks?", options: ["By avoiding international trade entirely.", "Through risk prevention, bearing, shifting, or division.", "By only trading with neighboring countries.", "By ignoring the risks."], correct: 1 },
{ question: "In a trade contract, the 'description of goods' is relevant for the freight forwarder because it:", options: ["Determines the buyer's creditworthiness.", "Specifies the payment method.", "Determines cargo handling and transport mode.", "Sets the applicable law for the contract."], correct: 2 },
{ question: "What do INCOTERMS primarily define?", options: ["Insurance premium rates.", "Standard conditions for the delivery of goods.", "Currency exchange rates.", "Banking procedures for payment."], correct: 1 },
{ question: "Which organization prepares and publishes INCOTERMS?", options: ["FIATA", "World Bank", "International Chamber of Commerce (ICC)", "WTO"], correct: 2 },
{ question: "Why are INCOTERMS important?", options: ["They set the price of the goods.", "They avoid misunderstandings and explain the division of costs and risks.", "They guarantee profit for the seller.", "They replace the need for a contract."], correct: 1 },
{ question: "Which INCOTERM 2020 rule is used for any mode of transport where the seller delivers at their premises?", options: ["FOB", "CIF", "EXW", "DDP"], correct: 2 },
{ question: "Which group of INCOTERMS 2020 is specifically for Sea and Inland Waterway Transport?", options: ["EXW, FCA, CPT", "FAS, FOB, CFR, CIF", "CIP, DAP, DPU", "CPT, CIP, DDP"], correct: 1 },
{ question: "Under which payment method does the seller lose control of the goods upon dispatch, trusting the buyer to pay?", options: ["Documentary Credit", "Documentary Collection", "Open Account", "Cash in Advance"], correct: 2 },
{ question: "In Documentary Collections, who hands over the documents of title to the buyer?", options: ["The seller directly", "The seller's bank", "The buyer's bank", "The freight forwarder"], correct: 2 },
{ question: "What is a key feature of a Documentary Credit (Letter of Credit)?", options: ["The seller ships the goods after receiving full payment.", "It is a conditional guarantee of payment from the buyer's bank.", "The buyer pays before any documents are presented.", "It is the least secure method for the seller."], correct: 1 },
{ question: "Which document governs Documentary Credits?", options: ["URC 522", "ICC INCOTERMS", "UCP 600", "FIATA Model Rules"], correct: 2 },
{ question: "What is the main advantage of Open Account terms for the buyer?", options: ["It is the most secure method for the seller.", "The buyer can receive and inspect goods before payment.", "The seller retains control of the goods.", "Banks handle all the documentation."], correct: 1 },
{ question: "In the context of trade contracts, 'Terms of Payment' determine:", options: ["The exact date of production.", "Which transport document proves delivery for payment.", "The color and size of the goods.", "The political risks involved."], correct: 1 },
{ question: "The 'Applicable Law' in a trade contract defines:", options: ["The duties and liabilities of the parties involved.", "The INCOTERMS to be used.", "The mode of transport to be selected.", "The bank for issuing the Letter of Credit."], correct: 0 },
{ question: "Which of the following is a 'Political Risk' in international trade?", options: ["Change in fashion trends", "Port shutdowns or border closures", "Supplier bankruptcy", "Fluctuations in exchange rates"], correct: 1 },
{ question: "The 'Quantity of goods' in a contract influences the freight forwarder's decision on:", options: ["The buyer's bank details.", "Transport technology (e.g., full load vs. parcel).", "The applicable INCOTERMS.", "The country of origin."], correct: 1 },
{ question: "What does the term 'Landed Cost' refer to?", options: ["The cost of the goods at the seller's factory.", "The total cost of a product including transport, insurance, and duties up to the destination.", "The cost of unloading the goods at the port.", "The bank charges for a Letter of Credit."], correct: 1 },
{ question: "Under the FOB Incoterm, where does the seller's responsibility end?", options: ["When the goods are delivered to the buyer's warehouse.", "When the goods are loaded on board the vessel at the named port.", "When the goods arrive at the destination port.", "When the goods clear customs in the buyer's country."], correct: 1 },
{ question: "Which payment method involves banks sending documents through the banking system with instructions to hand them over against payment?", options: ["Open Account", "Cash in Advance", "Documentary Collection", "Consignment"], correct: 2 },
{ question: "The risk of 'Non-performance' refers to:", options: ["The risk of goods being damaged during transport.", "The risk that one party does not fulfill their contractual obligations.", "The risk of currency value changes.", "The risk of natural disasters."], correct: 1 },
{ question: "Which INCOTERM places the maximum obligation on the seller?", options: ["EXW", "FCA", "DDP", "FAS"], correct: 2 },
{ question: "In a Documentary Collection process, the documents of title are given to the seller's bank by:", options: ["The buyer.", "The buyer's bank.", "The seller.", "The carrier."], correct: 2 },
{ question: "The 'Price' in a trade contract is relevant for the freight forwarder primarily for:", options: ["Determining the profit margin of the forwarder.", "Calculating the customs tariff.", "Choosing the mode of transport.", "Setting the delivery date."], correct: 1 },
{ question: "What is the main purpose of a trade contract?", options: ["To serve as a marketing tool.", "To legally define the agreement between buyer and seller.", "To replace the Bill of Lading.", "To specify the freight forwarder's fees."], correct: 1 },
{ question: "Which INCOTERM 2020 rule requires the seller to pay for insurance to the destination?", options: ["CFR", "FOB", "CIF", "EXW"], correct: 2 },
{ question: "The 'Terms of Delivery' in a contract directly inform the freight forwarder about:", options: ["The buyer's financial status.", "Who is responsible for carriage as the shipper.", "The applicable law for disputes.", "The packaging material to be used."], correct: 1 },
{ question: "Which document is typically NOT required under a Documentary Credit?", options: ["Commercial Invoice", "Transport Document (e.g., Bill of Lading)", "Certificate of Origin", "Seller's personal bank statement"], correct: 3 },
{ question: "The flow of documents in a Documentary Credit is primarily between:", options: ["The seller and the buyer directly.", "The seller, banks, and the buyer.", "The freight forwarder and the carrier.", "The insurance company and the customs authority."], correct: 1 },
///////////
{ question: "UNIT 3 What is the primary goal of UNCTAD's programmes on International Trade?", options: ["To standardize customs procedures globally.", "To promote the development of developing countries through international trade.", "To regulate international air transport.", "To issue FIATA documents."], correct: 1 },
{ question: "Which organization is known as 'The world business organization'?", options: ["WTO", "ICC", "WCO", "FIATA"], correct: 1 },
{ question: "The WCO's mission is to enhance the effectiveness and efficiency of:", options: ["International banking systems.", "Customs Administrations.", "Airline safety standards.", "Trade negotiations."], correct: 1 },
{ question: "What is the main focus of the World Trade Organization (WTO)?", options: ["Providing financial assistance to poor countries.", "Dealing with the rules of trade between nations.", "Developing international commercial terms (INCOTERMS).", "Creating standards for freight forwarders."], correct: 1 },
{ question: "The World Bank consists of which two development institutions?", options: ["IMF and IBRD", "IBRD and IDA", "WTO and UNCTAD", "IDA and ICC"], correct: 1 },
{ question: "What type of organization is ISO?", options: ["A United Nations specialized agency", "A non-governmental organization", "A global banking institution", "A customs union"], correct: 1 },
{ question: "FIATA is described as:", options: ["The International Air Transport Association", "The International Federation of Freight Forwarders Associations", "The World Customs Organization", "The International Chamber of Commerce"], correct: 1 },
{ question: "Approximately how many forwarding and logistics firms does FIATA represent today?", options: ["1,000", "10,000", "40,000", "100,000"], correct: 2 },
{ question: "Which organization has consultative status with the UN Economic and Social Council (ECOSOC)?", options: ["WTO", "WCO", "FIATA", "ICC"], correct: 2 },
{ question: "What does ICC stand for?", options: ["International Customs Council", "International Chamber of Commerce", "International Cargo Committee", "Institute of Commercial Contracts"], correct: 1 },
{ question: "Which organization is responsible for the Uniform Customs and Practice for Documentary Credits (UCP 600)?", options: ["FIATA", "WTO", "ICC", "UNCTAD"], correct: 2 },
{ question: "The International Bank for Reconstruction and Development (IBRD) focuses on:", options: ["The poorest countries in the world", "Middle-income and creditworthy poor countries", "Only European countries", "Agricultural development only"], correct: 1 },
{ question: "ISO standards are developed through:", options: ["Government mandates only", "A consensus-based approach involving various stakeholders", "Decisions by the United Nations", "Military specifications"], correct: 1 },
{ question: "FIATA is recognized as representing the freight forwarding industry by many:", options: ["Airlines only", "Governmental and private international organizations", "Manufacturing companies only", "Banking institutions only"], correct: 1 },
{ question: "UNCTAD provides support for developing countries in:", options: ["Military training", "International trade negotiations", "Space exploration", "Domestic legislation"], correct: 1 },
{ question: "The Central Secretariat of ISO is located in:", options: ["New York, USA", "Paris, France", "Geneva, Switzerland", "London, UK"], correct: 2 },
{ question: "Which organization deals with combating commercial crime?", options: ["WTO", "WCO", "ICC", "FIATA"], correct: 2 },
{ question: "FIATA members are often called:", options: ["Masters of Transport", "Architects of Transport", "Lords of Logistics", "Kings of Cargo"], correct: 1 },
{ question: "The International Development Association (IDA) focuses on:", options: ["Middle-income countries", "The poorest countries in the world", "Industrialized nations", "Oil-producing countries"], correct: 1 },
{ question: "Which organization prepares INCOTERMS?", options: ["FIATA", "WTO", "ICC", "WCO"], correct: 2 },
{ question: "ISO's membership consists of:", options: ["National governments only", "National standards institutes", "Individual companies", "Customs administrations"], correct: 1 },
{ question: "FIATA has consultative status with UNCTAD and:", options: ["NATO", "UNESCO", "UNCITRAL", "WHO"], correct: 2 },
{ question: "The World Bank provides:", options: ["Military equipment", "Low-interest loans and grants to developing countries", "Free shipping containers", "Insurance for all cargo"], correct: 1 },
{ question: "Which organization is known as the 'competent global intergovernmental organization in Customs matters'?", options: ["WTO", "ICC", "WCO", "UNCTAD"], correct: 2 },
{ question: "ICC activities cover a broad spectrum including:", options: ["Space technology", "Arbitration and dispute resolution", "Military logistics", "Pharmaceutical research"], correct: 1 },
{ question: "FIATA represents an industry employing approximately how many people?", options: ["1-2 million", "3-5 million", "8-10 million", "15-20 million"], correct: 2 },
{ question: "The WTO agreements are:", options: ["Only for developed countries", "Negotiated and signed by the bulk of the world's trading nations", "Mandatory for all UN members", "Only for agricultural products"], correct: 1 },
{ question: "UNCTAD's work includes analysis of issues related to:", options: ["Space exploration", "Competition law and policy", "Military strategy", "Entertainment industry"], correct: 1 },
{ question: "ISO occupies a special position between:", options: ["The public and private sectors", "The military and civilian sectors", "Air and sea transport", "Importers and exporters only"], correct: 0 },
{ question: "Which organization is referred to as the largest non-governmental organisation in the field of transportation?", options: ["IATA", "IRU", "FIATA", "UIC"], correct: 2 },
//////////////////////////////////////////////
{ question: "UNIT 4 What is the main purpose of a Quality Management System (QMS) in a forwarding company?", options: ["To manage the company's financial investments.", "To fix the quality policy and plan quality parameters like punctuality and availability.", "To handle marketing and sales strategies.", "To recruit new employees."], correct: 1 },
{ question: "Which department in a typical forwarding company structure is responsible for the actual movement of goods?", options: ["Sales Department", "Operations Department", "Admin/HR Department", "Business Development Department"], correct: 1 },
{ question: "According to the Kraljic Model, which type of purchasing item has high profit impact but low supply risk?", options: ["Bottleneck", "Leverage", "Strategic", "Routine"], correct: 1 },
{ question: "What is the primary focus of an Environmental Management System (EMS) like ISO 14001?", options: ["Managing the company's interaction with and impact upon the environment.", "Maximizing sales revenue.", "Reducing employee workload.", "Improving product design."], correct: 0 },
{ question: "Which of the following is a characteristic of a 'Routine' item in the Kraljic Matrix?", options: ["Requires detailed market research", "Needs volume insurance at a cost premium", "Product standardization and efficient processing", "Development of long-term supply relationships"], correct: 2 },
{ question: "In a typical forwarding company, who is at the top of the organizational structure?", options: ["Operations Manager", "Sales Executive", "Managing Director", "Customer Service Representative"], correct: 2 },
{ question: "What is a key benefit of implementing a Quality Management System?", options: ["Guaranteed profit increase.", "Systematic analysis of failures and development of improvement measures.", "Automatic reduction of all costs.", "Elimination of the need for customer service."], correct: 1 },
{ question: "Which factor is NOT typically considered when choosing a mode of transport?", options: ["Nature of the goods and size of the shipment.", "Cost of packing and insurance.", "Delivery times and speed.", "The political party in power."], correct: 3 },
{ question: "What does 'Quality Control' in a QMS primarily involve?", options: ["Setting the company's annual budget.", "Managing the forwarding process (disposition).", "Designing new company logos.", "Negotiating salaries with employees."], correct: 1 },
{ question: "Which type of forwarder specializes in specific modes of transport or goods, such as tanks or railway?", options: ["System Provider", "International Universal Forwarder", "Specialized Forwarder", "Customs Agent"], correct: 2 },
{ question: "The Kraljic Model is used to:", options: ["Determine appropriate procurement strategies by optimizing costs and risks.", "Design company websites.", "Plan employee vacation schedules.", "Set international trade laws."], correct: 0 },
{ question: "Which of the following is a 'PRO' of road transportation?", options: ["Fixed timetable worldwide.", "Door-to-door transportation without extra cost.", "The cheapest method for bulk cargo.", "Very short transportation time."], correct: 1 },
{ question: "What is a major 'CON' of air transportation?", options: ["Long transportation time.", "Depends on weather conditions.", "An expensive method of transportation.", "Needs solid packing."], correct: 2 },
{ question: "A 'System Provider' in forwarding typically acts as:", options: ["A specialized customs broker.", "A network provider for courier, parcel, and express services.", "A warehouse operator only.", "A financial advisor for clients."], correct: 1 },
{ question: "What is the final stage in the quality management process as described?", options: ["Quality Planning", "Quality Control", "Quality Inspection", "Quality Improvement"], correct: 3 },
{ question: "Which department in a forwarding company is likely responsible for finding and securing clients?", options: ["Operations Department", "Sales Department", "Process Department", "Admin Department"], correct: 1 },
{ question: "For 'Strategic' items in the Kraljic Matrix, decision-making typically occurs at which level?", options: ["Lower levels (buyers, staff)", "Medium levels (chief buyers)", "Top levels (vice-president, function heads)", "No specific level required"], correct: 2 },
{ question: "What is a key function of the 'Admin/HR Department' in a forwarding company?", options: ["Managing the actual shipment of goods.", "Handling human resources and administrative tasks.", "Negotiating with carriers.", "Sales and customer acquisition."], correct: 1 },
{ question: "The ISO 14001:2015 standard is closely aligned with:", options: ["The FIATA model rules.", "The European Eco Management & Audit Scheme (EMAS).", "The World Bank's lending policies.", "INCOTERMS 2020."], correct: 1 },
{ question: "Which of the following is a 'CON' of sea transportation?", options: ["Low flexibility in pricing.", "Using public roads.", "Limited rail network.", "Long transportation time."], correct: 3 },
{ question: "What does 'Quality Inspection' in a QMS involve?", options: ["Planning future quality parameters.", "Checking quality at relevant interfaces and points in the process.", "Developing new services.", "Managing employee performance reviews."], correct: 1 },
{ question: "A 'Customs Agent' primarily provides services related to:", options: ["Warehousing and storage.", "Customs clearance.", "International road haulage.", "Air freight consolidation."], correct: 1 },
{ question: "Which factor is linked to the efficiency of a transport method?", options: ["Delivery times and speed.", "Cost of transshipment.", "The nature of the goods and the size of the shipment.", "Insurance costs."], correct: 2 },
{ question: "In the Kraljic Model, 'Bottleneck' items require:", options: ["Product substitution.", "Volume insurance and control of vendors.", "Exploration of full purchasing power.", "Accurate demand forecasting."], correct: 1 },
{ question: "The main goal of 'Quality Planning' is to:", options: ["Plan the quality parameters of forwarding services and necessary means.", "Inspect goods for damage upon arrival.", "Hire quality assurance staff.", "Reduce the number of suppliers."], correct: 0 },
{ question: "Which type of forwarder offers 'Logistics Services' with a specialization on customers/supply chains?", options: ["International Universal Forwarder", "Specialized Forwarder", "System Provider", "Customs Agent"], correct: 1 },
{ question: "A significant disadvantage of rail transport is:", options: ["High flexibility in pricing.", "Limited rail network.", "High environmental impact.", "Inability to carry bulky goods."], correct: 1 },
{ question: "The 'Process Department' in a forwarding company likely handles:", options: ["Customer sales and relationship management.", "Optimizing and managing internal workflows and procedures.", "Legal compliance and contract management.", "Financial accounting and invoicing."], correct: 1 },
{ question: "For 'Leverage' items in the Kraljic Matrix, a key strategy is:", options: ["Security of inventory and backup plans.", "Exploration of full purchasing power and targeted negotiation.", "Efficient processing and inventory optimization.", "Make-or-buy decisions and risk analysis."], correct: 1 },
{ question: "The ISO 19011 standard is related to:", options: ["Quality management systems.", "Auditing management systems, including quality and environmental.", "Financial accounting principles.", "Safety standards for dangerous goods transport."], correct: 1 },
////////////////////////////
{ question: "UNIT 5What is the primary purpose of accounting in a forwarding company?", options: ["To manage employee schedules", "To help managers make resource allocation decisions", "To design marketing materials", "To handle customer complaints"], correct: 1 },
{ question: "Which type of accounting produces the Income Statement and Balance Sheet?", options: ["Cost Accounting", "Tax Accounting", "Financial Accounting", "Controlling"], correct: 2 },
{ question: "What is the main difference between fixed and variable costs?", options: ["Fixed costs change with business activity, variable costs do not.", "Fixed costs are associated with productive work, variable costs with administration.", "Fixed costs do not change during quiet or busy times, variable costs do.", "Variable costs are only for office supplies."], correct: 2 },
{ question: "What is the Break-Even Point?", options: ["The point where a company starts making a profit", "The point where net sales equal total costs (fixed + variable)", "The point where variable costs exceed fixed costs", "The point where a company decides to close down"], correct: 1 },
{ question: "Which of the following is typically found on an invoice?", options: ["Employee performance reviews", "Breakdown of invoice total and tax numbers", "Company's long-term strategy", "Marketing campaign plans"], correct: 1 },
{ question: "What is the main objective of risk management in a forwarding company?", options: ["To eliminate all risks", "To measure risks and develop strategies to manage them", "To ignore small risks", "To transfer all risks to customers"], correct: 1 },
{ question: "Which of these is considered a strategic risk?", options: ["Loss of contract with main customer", "Daily operational issues", "Employee tardiness", "Office supply shortages"], correct: 0 },
{ question: "What does a risk portfolio help to evaluate?", options: ["Employee satisfaction", "Occurrence probability and possible loss of risk", "Marketing effectiveness", "Customer demographics"], correct: 1 },
{ question: "Which of these is a financial risk?", options: ["Exchange rate fluctuations", "Political instability", "Supplier reliability", "Weather conditions"], correct: 0 },
{ question: "What is the first step in the risk management process?", options: ["Implement treatment", "Identify risks", "Establish context", "Monitor and review"], correct: 2 },
{ question: "Which accounting type focuses on contribution margin ordered by products?", options: ["Financial Accounting", "Tax Accounting", "Controlling", "Cost Accounting"], correct: 2 },
{ question: "What do service cost centers represent?", options: ["Sections that produce outputs for customers directly", "Sections where costs are accumulated but don't produce customer outputs directly", "The company's profit centers", "External supplier departments"], correct: 1 },
{ question: "Which of these is an operational risk?", options: ["Market risks", "Day-to-day business process failures", "Political risks", "Strategic planning errors"], correct: 1 },
{ question: "What is the purpose of a risk register?", options: ["To track employee attendance", "To identify and monitor all possible contract risks", "To record customer payments", "To schedule transportation routes"], correct: 1 },
{ question: "Which risk treatment involves accepting the risk?", options: ["Risk Transfer", "Risk Avoidance", "Risk Acceptance", "Risk Insurance"], correct: 2 },
{ question: "What does cash flow statement provide transparency in?", options: ["Employee performance", "Movement of cash", "Product quality", "Market trends"], correct: 1 },
{ question: "Which cost category naturally rises and falls with business activity?", options: ["Fixed costs", "Administrative costs", "Variable costs", "Overhead costs"], correct: 2 },
{ question: "What is included in the 'Establish Context' step of risk management?", options: ["Implementing controls", "Determining key business objectives and processes", "Identifying specific risks", "Reviewing existing controls"], correct: 1 },
{ question: "Which of these is an external risk?", options: ["Internal process failures", "Employee errors", "Political risks and policy changes", "Management decisions"], correct: 2 },
{ question: "What is the main purpose of cost accounting?", options: ["To prepare tax returns", "To categorize and analyze different types of costs", "To create financial statements", "To manage human resources"], correct: 1 },
{ question: "Which risk treatment involves purchasing insurance?", options: ["Risk Transfer", "Risk Avoidance", "Risk Acceptance", "Risk Minimization"], correct: 0 },
{ question: "What information does contribution margin accounting provide?", options: ["Tax liabilities", "How much profit or loss comes from different products", "Employee productivity", "Customer satisfaction levels"], correct: 1 },
{ question: "Which of these is a commercial risk?", options: ["Natural disasters", "Business downturn", "Employee turnover", "Equipment failure"], correct: 1 },
{ question: "What is the final step in the risk management process?", options: ["Identify risks", "Assess risks", "Implement treatment", "Monitor and review"], correct: 3 },
{ question: "Which accounting output shows the economic result for the year?", options: ["Balance sheet", "Income statement", "Cash flow statement", "Tax statement"], correct: 1 },
{ question: "What type of risk is 'force majeure'?", options: ["Financial risk", "Commercial risk", "Operational risk", "Strategic risk"], correct: 1 },
{ question: "What do profit centers produce?", options: ["Costs only", "Outputs for customers directly", "Administrative reports", "Tax documents"], correct: 1 },
{ question: "Which risk treatment involves completely avoiding the risky activity?", options: ["Risk Transfer", "Risk Avoidance", "Risk Acceptance", "Risk Insurance"], correct: 1 },
{ question: "What does the balance sheet show?", options: ["Cash movements over time", "The financial position of the enterprise at a point in time", "Product profitability", "Employee performance"], correct: 1 },
{ question: "Which of these would be considered a cost unit?", options: ["Administrative department", "Service cost center", "Individual products or contracts", "Human resources department"], correct: 2 },
////////////////////////////////////////////
{ question: " UNIT 6 What does FBL stand for?", options: ["Forwarder Bill of Lading", "FIATA Bill of Lading", "Freight Bill of Lading", "FIATA Multimodal Transport Bill of Lading"], correct: 3 },
{ question: "Which FIATA document is negotiable and transferable?", options: ["FWB", "FCR", "FBL", "SDT"], correct: 2 },
{ question: "What is the primary characteristic of an FWB?", options: ["It is a negotiable document", "It should not be produced for the delivery of goods", "It serves as a certificate of receipt only", "It is used exclusively for air freight"], correct: 1 },
{ question: "When issuing an FBL, the forwarding agent must ensure:", options: ["The consignment is insured by the carrier", "He has taken over the consignment and has sole right of disposal", "The goods are delivered directly to the consignee", "Only one original copy is issued"], correct: 1 },
{ question: "What does FCR stand for?", options: ["Forwarder's Cargo Receipt", "FIATA Certificate of Receipt", "Freight Carrier Receipt", "Forwarder Certificate of Receipt"], correct: 3 },
{ question: "Which document is described as 'only a receipt of goods by the MTO'?", options: ["FBL", "FWB", "FCR", "FWR"], correct: 2 },
{ question: "What is a key requirement when issuing an FCT?", options: ["The forwarder must have insurance coverage", "The document must be stamped 'non-negotiable'", "The forwarder has taken over the goods and has right of disposal", "Only electronic copies are issued"], correct: 2 },
{ question: "Which FIATA document is largely replaced by FBL?", options: ["FWB", "FCR", "FCT", "SDT"], correct: 2 },
{ question: "What does FWR represent?", options: ["Forwarder Warehouse Receipt", "FIATA Warehouse Receipt", "Freight Warehouse Receipt", "Forwarder Weight Receipt"], correct: 0 },
{ question: "Under what condition is FWR negotiable?", options: ["Always negotiable", "Never negotiable", "Only when marked 'negotiable'", "Only for sea transport"], correct: 2 },
{ question: "What is the purpose of FFI or SI?", options: ["To declare dangerous goods", "To serve as an MTO-customer contract", "To certify weight of goods", "To replace bills of lading"], correct: 1 },
{ question: "Which FIATA form is designed according to the UN layout key?", options: ["FBL", "FWB", "FFI", "SDT"], correct: 2 },
{ question: "What does SDT primarily deal with?", options: ["Warehouse receipts", "Dangerous goods declaration", "Weight certification", "Shipping instructions"], correct: 1 },
{ question: "Which transport modes can FIATA SDT be used for?", options: ["Only air transport", "Only sea transport", "Road in Europe (ADR) or sea transport (IMDG)", "Only rail transport"], correct: 2 },
{ question: "Who must sign the SDT document?", options: ["The freight forwarder", "The carrier only", "The shipper only", "The consignee"], correct: 2 },
{ question: "What does SIC certify?", options: ["The value of goods", "The weight of goods", "The quality of goods", "The insurance coverage"], correct: 1 },
{ question: "Where is FIATA SIC commonly used?", options: ["In European road transport", "In intermodal freight forwarding in the USA", "In Asian sea transport", "In African air transport"], correct: 1 },
{ question: "Which standard does FIATA SIC meet?", options: ["ISO 9001", "Intermodal Safe Container Act (USA)", "SOLAS regulations", "IMDG code"], correct: 1 },
{ question: "What is a key requirement for issuing FCT documents?", options: ["They must be sent by regular mail", "They should be dispatched by registered post only", "They require consignee's approval", "They need carrier's signature"], correct: 1 },
{ question: "Which document contains detailed provisions on transfer of ownership?", options: ["FBL", "FWB", "FWR", "SDT"], correct: 2 },
{ question: "What must be specified when issuing an FBL?", options: ["The number of originals issued", "The consignee's bank details", "The carrier's insurance policy", "The customs declaration number"], correct: 0 },
{ question: "Which FIATA document is NOT accepted for international rail transport?", options: ["FBL", "FWB", "SDT", "FCR"], correct: 2 },
{ question: "What is the main purpose of the Container/Vehicle Packing Certificate?", options: ["To declare goods value", "To certify proper packing of dangerous goods", "To serve as insurance document", "To replace commercial invoice"], correct: 1 },
{ question: "Which statement about FCR is correct?", options: ["It is a negotiable document", "Multiple originals are always issued", "It's only a receipt, not a negotiable document", "It replaces the bill of lading"], correct: 2 },
{ question: "What information does FFI contain?", options: ["Only shipping instructions", "Conditions of sale and documentary credit terms", "Only dangerous goods classification", "Warehouse storage details"], correct: 1 },
{ question: "When issuing FCT, what must be agreed upon?", options: ["The forwarder's profit margin", "Responsibility for insurance of the goods", "The consignee's payment terms", "The carrier's liability limits"], correct: 1 },
{ question: "Which document requires certification that the container was clean and dry?", options: ["FBL", "SDT", "FWR", "SIC"], correct: 1 },
{ question: "What is the status of FWR regarding negotiability?", options: ["Always negotiable", "Never negotiable", "Negotiable only when marked as such", "Negotiable only for certain goods"], correct: 2 },
{ question: "Which FIATA document is specifically for warehousing operations?", options: ["FBL", "FWB", "FWR", "SDT"], correct: 2 },
{ question: "What must be checked when issuing an FCT regarding other documents?", options: ["Conditions of freight document (B/L) are not contrary to FCT obligations", "The invoice amount matches the goods value", "The carrier's license is valid", "The consignee's credit rating"], correct: 0 },
/////////////////////////
{ question: "UNIT 7 What is the primary purpose of understanding time zones in international transport?", options: ["To calculate currency exchange rates", "To coordinate schedules and operations across different regions", "To determine product pricing", "To plan marketing campaigns"], correct: 1 },
{ question: "Which ocean is primarily crossed by the Trans-Atlantic trade lane?", options: ["Pacific Ocean", "Indian Ocean", "Atlantic Ocean", "Arctic Ocean"], correct: 2 },
{ question: "The main air traffic routes typically connect:", options: ["Rural areas within the same country", "Major global economic hubs and cities", "Only tourist destinations", "Military bases exclusively"], correct: 1 },
{ question: "What is a key transport corridor connecting Europe and Asia?", options: ["The Panama Canal", "The Suez Canal", "The TRACECA corridor", "The North American Free Trade Route"], correct: 2 },
{ question: "River-shipping is characterized by:", options: ["Vessels with deep draught for ocean crossings", "Vessels with very little draught and retractable masts", "Exclusive use for passenger transport", "Being the fastest mode of transport"], correct: 1 },
{ question: "The Sea-Air technique is primarily used to:", options: ["Replace all maritime transport", "Find the best compromise between speed and cost", "Avoid customs procedures", "Transport goods only within the same continent"], correct: 1 },
{ question: "In the Sea-Air example given, which city is the transshipment point between Singapore and Antwerp?", options: ["London", "Dubai", "Shanghai", "New York"], correct: 1 },
{ question: "What is a significant advantage of the Sea-Air technique?", options: ["It is always the cheapest option", "It eliminates all transport risks", "It saves time compared to all-sea transport and costs less than all-air transport", "It requires no special handling"], correct: 2 },
{ question: "Main world sea traffic ways are also known as:", options: ["Flight paths", "Trade lanes", "Railway networks", "Highway systems"], correct: 1 },
{ question: "The purpose of transport corridors like those between Europe and Asia is to:", options: ["Create political alliances", "Facilitate efficient and established routes for goods movement", "Promote tourism only", "Replace air transport entirely"], correct: 1 },
{ question: "What geographical feature is crucial for river-shipping?", options: ["High mountains", "Deep ocean trenches", "Navigable rivers and inland ports", "Desert oases"], correct: 2 },
{ question: "How does the Sea-Air technique save time in the Singapore-Antwerp example?", options: ["By using a direct flight", "By shipping to Dubai and then flying to Antwerp, reducing total transit time vs. all-sea", "By using a faster ship", "By eliminating port handling"], correct: 1 },
{ question: "Time zone knowledge helps a freight forwarder to:", options: ["Set product prices", "Avoid scheduling deliveries outside of the consignee's business hours", "Design product packaging", "Negotiate payment terms"], correct: 1 },
{ question: "Which region is a major hub in global air traffic routes?", options: ["The Sahara Desert", "The Himalayas", "Southeast Asia", "Antarctica"], correct: 2 },
{ question: "The TRACECA corridor is an example of a:", options: ["Air traffic control zone", "Europe-Asia transport corridor", "River shipping network", "Time zone boundary"], correct: 1 },
{ question: "What is a key operational requirement for river-shipping vessels?", options: ["Ability to sail under bridges", "Capacity for transoceanic voyages", "High speed for quick delivery", "Large size for bulk cargo only"], correct: 0 },
{ question: "In the Sea-Air technique, the maritime leg is typically used for:", options: ["The most time-sensitive part of the journey", "The shorter, more expensive part of the journey", "The longer, less expensive part of the journey", "The final delivery to the customer's door"], correct: 2 },
{ question: "Understanding main transport corridors allows a forwarder to:", options: ["Advise clients on the most efficient routes", "Determine the chemical composition of goods", "Set international trade laws", "Manufacture the goods being shipped"], correct: 0 },
{ question: "What is a major factor making Dubai a good hub for Sea-Air transport?", options: ["Its cold climate", "The proximity of its airport to the seaport", "Its location in the center of Europe", "Lack of any customs procedures"], correct: 1 },
{ question: "The main world sea traffic ways connect major:", options: ["Deserts and forests", "Ports and economic regions", "Tourist attractions", "Mining sites"], correct: 1 },
{ question: "River-shipping is most suitable for transporting goods between:", options: ["Any two countries in the world", "Inland river ports and seaports", "Airports only", "Desert regions"], correct: 1 },
{ question: "What is the primary cost advantage of the Sea-Air technique over all-air transport?", options: ["It uses cheaper fuel", "The maritime leg is less expensive than air freight", "It has lower labor costs", "It avoids all taxes"], correct: 1 },
{ question: "Knowledge of time zones is essential for:", options: ["Calculating the weight of goods", "Scheduling teleconferences and tracking shipments across regions", "Designing the company logo", "Choosing the color of shipping containers"], correct: 1 },
{ question: "Which of these is a key characteristic of main air traffic routes?", options: ["They follow meandering paths for scenic views", "They connect major global hubs with high-frequency flights", "They are used only for cargo planes", "They avoid flying over oceans"], correct: 1 },
{ question: "The Europe-Asia land transport corridors often aim to:", options: ["Bypass traditional sea routes", "Replace all air freight", "Transport only passengers", "Operate only during winter"], correct: 0 },
{ question: "Vessels used in river-shipping often have retractable masts to:", options: ["Increase their speed", "Sail under bridges", "Carry more cargo", "Improve fuel efficiency"], correct: 1 },
{ question: "In the Sea-Air technique, the air leg is typically used for:", options: ["The longer, cheaper part of the journey", "The shorter, more expensive but faster part of the journey", "The initial collection from the shipper", "Storage of goods"], correct: 1 },
{ question: "What type of map is most useful for understanding global sea traffic ways?", options: ["A political map showing country borders", "A map highlighting major shipping lanes and ports", "A topographic map showing elevations", "A climate map showing weather patterns"], correct: 1 },
{ question: "The concept of 'transit time' in the Sea-Air example refers to the:", options: ["Time taken to load the goods at the origin", "Total time taken for the goods to move from origin to destination", "Time taken for customs clearance only", "Time difference between two time zones"], correct: 1 },
{ question: "Why is geographical knowledge important for a freight forwarder?", options: ["It helps in designing the goods", "It is essential for planning efficient and cost-effective transport routes", "It is only needed for marketing purposes", "It helps in manufacturing processes"], correct: 1 },
/////////////////
{ question: "UNIT 8 What is the main economic benefit of consolidation?", options: ["It increases the weight of each consignment", "It is more economical for both the customer and the freight forwarder", "It requires special packaging for all goods", "It eliminates the need for documentation"], correct: 1 },
{ question: "Heavyweight and out-of-gauge cargo typically:", options: ["Weigh less than standard containers", "Conform to standard transport equipment dimensions", "Exceed the usual capacities of transport equipment and infrastructure", "Do not require any special planning"], correct: 2 },
{ question: "How are Dangerous Goods (DGs) classified?", options: ["By their color and packaging", "By the country of origin", "Into classes based on specific chemical characteristics producing risk", "Only by their weight"], correct: 2 },
{ question: "What is a common restriction when transporting Dangerous Goods?", options: ["They must always be transported alone", "They often cannot be co-loaded with other goods", "They can be shipped with any type of goods without restriction", "They are only allowed on air transport"], correct: 1 },
{ question: "What must be observed during the transportation of foodstuffs?", options: ["Special speed limits for trucks", "Hygienic standards and food law", "Specific colors for labeling", "Exclusive use of air transport"], correct: 1 },
{ question: "Perishable goods are characterized by their dependence on:", options: ["Specific environmental conditions like temperature and humidity", "The price of the goods", "The type of packaging material used", "The currency exchange rate"], correct: 0 },
{ question: "What kind of transport is often necessary for flowers and plants?", options: ["Standard dry van containers", "Time and temperature-controlled transport", "Open-top containers without climate control", "Rail transport only"], correct: 1 },
{ question: "Livestock transportation requires:", options: ["Standard shipping containers", "No special documentation", "Special transport equipment and skilled personnel", "The same conditions as general cargo"], correct: 2 },
{ question: "In consolidation, how does a forwarder often charge for each consignment?", options: ["A maximum freight rate", "A minimum freight", "Based on the value of the goods", "No charge for consolidated goods"], correct: 1 },
{ question: "What is a key requirement for transporting heavyweight cargo?", options: ["Using the smallest available truck", "Special planning, preparation, and permissions", "Avoiding insurance coverage", "Transporting only during the day"], correct: 1 },
{ question: "The primary risk posed by Dangerous Goods is to:", options: ["The profit margin of the forwarder", "Health, safety, property, or the environment", "The political stability of the destination country", "The exchange rate"], correct: 1 },
{ question: "The term 'out-of-gauge' refers to cargo that:", options: ["Is always the lightest", "Has dimensions within standard limits", "Has dimensions exceeding standard limits", "Is only transported by air"], correct: 2 },
{ question: "What is a critical factor for perishables?", options: ["The brand of the goods", "The need for special transport equipment (e.g., reefer containers)", "The language on the packaging", "The time of year they are produced"], correct: 1 },
{ question: "Why are flowers and plants considered sensitive goods?", options: ["They have a very high monetary value", "They are not affected by environmental conditions", "They require time and temperature control to maintain quality", "They are always dangerous goods"], correct: 2 },
{ question: "What does the consolidation process involve?", options: ["Delivering cargos from one customer only", "Long-term storage without transportation", "Combining cargos from different customers in the same direction", "Using only air transport for all goods"], correct: 2 },
{ question: "What is a 'heavy lift'?", options: ["A cargo that is very small and light", "A cargo whose weight exceeds usual capacities", "A standard palletized load", "A cargo that is only transported by sea"], correct: 1 },
{ question: "A key reason for not co-loading Dangerous Goods with other items is to:", options: ["Reduce the overall shipping cost", "Prevent potential reactions or hazards", "Make documentation simpler", "Comply with marketing standards"], correct: 1 },
{ question: "The purpose of food law in transport is to ensure:", options: ["The lowest possible cost", "The safety and suitability of food for consumption", "The fastest delivery time", "The most attractive packaging"], correct: 1 },
{ question: "What type of container is commonly used for perishables?", options: ["A standard 20-foot dry container", "A flat rack container", "A temperature-controlled (reefer) container", "An open-top container"], correct: 2 },
{ question: "Transporting livestock differs from general cargo because it involves:", options: ["Less paperwork", "Living animals with specific welfare needs", "Lower costs", "No need for specialized equipment"], correct: 1 },
{ question: "From a forwarder's perspective, consolidation allows them to:", options: ["Book full truckloads at a lower freight rate", "Use only air transport", "Avoid using warehouses", "Eliminate the need for customer contact"], correct: 0 },
{ question: "Planning for out-of-gauge cargo must consider:", options: ["Only the cost of the goods", "Route surveys and infrastructure clearances", "The political party in power", "The color of the cargo"], correct: 1 },
{ question: "Which symbol is commonly associated with Dangerous Goods?", options: ["A smiling face", "A company logo", "A hazard pictogram (e.g., flame, skull)", "A barcode"], correct: 2 },
{ question: "Maintaining the cold chain is vital for:", options: ["Electronic goods", "Perishable goods like food and pharmaceuticals", "Building materials", "Books and paper products"], correct: 1 },
{ question: "Why is air transport often preferred for flowers?", options: ["To ensure they reach the market quickly while fresh", "Because it is always the cheapest option", "Because they are classified as dangerous goods", "To avoid any temperature control"], correct: 0 },
{ question: "What is a major challenge in livestock transport?", options: ["Ensuring animal welfare during the journey", "Finding containers that are perfectly square", "Making sure the animals are a specific color", "Avoiding all documentation"], correct: 0 },
{ question: "The main goal of consolidating deliveries is to achieve:", options: ["Higher costs for the customer", "Economies of scale and cost efficiency", "Slower transit times", "Increased paperwork"], correct: 1 },
{ question: "An example of an 'out-of-gauge' dimension could be a cargo that is:", options: ["Too light to be weighed", "Too short for a truck bed", "Too wide or too tall for a standard container", "Perfectly sized for a pallet"], correct: 2 },
{ question: "Which class of Dangerous Goods includes flammable liquids?", options: ["Class 1", "Class 3", "Class 6", "Class 8"], correct: 1 },
{ question: "What is essential for the safe transport of all special cargoes mentioned?", options: ["Specialized knowledge, planning, and equipment", "Using the same method as for general cargo", "Ignoring regulations to save time", "Transporting only during summer"], correct: 0 },
/////////////////////////////////////
{ question: " UNIT 9 What is the primary function of packaging for shipped merchandise?", options: ["To make the goods look more attractive for marketing", "To ensure it arrives in good condition by protecting it from breakage, moisture, and theft", "To increase the weight and dimensions for higher shipping costs", "To hide the contents of the package from the shipper"], correct: 1 },
{ question: "All packages should be properly secured and filled with what kind of material?", options: ["Heavy material", "Moisture-resistant material", "Recyclable material only", "Transparent material"], correct: 1 },
{ question: "Which of the following is NOT a function of packaging mentioned in the unit?", options: ["Goods must be protected from the environment", "The environment must be protected from the goods", "Packages help communication with shippers and receivers", "Packages are used for advertising the company's other products"], correct: 3 },
{ question: "Correct marking of packages helps to prevent all of the following EXCEPT:", options: ["Incorrect handling and delivery", "Customs fines", "A decrease in the product's market price", "Accidents and losses of weight/volume"], correct: 2 },
{ question: "How should the colour of the marking stand out?", options: ["It should be the same colour as the package for a clean look", "It should be a dark colour on a dark background", "It should clearly stand out from the colour of the package", "The colour is not important as long as the text is large"], correct: 2 },
{ question: "Where possible, what kind of symbols should be used for marking?", options: ["Coloured symbols on a white background", "Black symbols on a white background", "White symbols on a black background", "Red symbols on a yellow background"], correct: 1 },
{ question: "Marking must be applied in a manner that is:", options: ["Legible and durable", "Temporary and easily removable", "Small and discreet", "Only in the local language"], correct: 0 },
{ question: "On how many sides should all packages have markings?", options: ["One side only", "Two opposite sides", "Three sides", "All six sides"], correct: 2 },
{ question: "Which of these is an example of a 'Handling mark'?", options: ["The country of origin", "'Fragile' or 'This Side Up'", "The shipper's name", "The receiver's order number"], correct: 1 },
{ question: "The 'Shipper's mark' typically includes:", options: ["The dimensions of the package", "The country of origin", "The shipper's or receiver's company name", "The gross weight"], correct: 2 },
{ question: "What does an 'Information mark' typically indicate?", options: ["The preferred carrier for shipment", "The country of origin and the weight of the package", "The shipping costs", "The date of manufacture"], correct: 1 },
{ question: "Which of these is a component of 'Shipping Marks'?", options: ["The price of the goods", "The total number of items in the complete consignment", "The seller's bank details", "The INCOTERM used in the sale"], correct: 1 },
{ question: "The 'Identification number' in shipping marks could be:", options: ["The number of packages in the consignment", "The receiver's order number", "The place of destination", "The package's serial number"], correct: 1 },
{ question: "The marking that shows the 'Number of packages in the consignment' helps to:", options: ["Calculate the insurance cost", "Identify if any packages are missing upon delivery", "Determine the customs duty rate", "Choose the correct mode of transport"], correct: 1 },
{ question: "The 'Place and port of destination' is part of the:", options: ["Handling marks", "Information marks", "Shipping marks", "Customs declaration only"], correct: 2 },
{ question: "Why is indicating the 'Country of origin' important?", options: ["It determines the shipping route", "It is used for customs and statistical purposes", "It tells the handler how to stack the package", "It shows the language for the handling instructions"], correct: 1 },
{ question: "Indicating the weight of the package is crucial for:", options: ["Marketing the product", "Calculating shipping costs and ensuring safe handling", "Complying with the seller's internal policy", "Informing the consumer about the product net weight"], correct: 1 },
{ question: "The dimensions of a package are considered part of the:", options: ["Shipping marks", "Information marks", "Handling marks", "Insurance documents"], correct: 1 },
{ question: "What is the main goal of proper packing and marking?", options: ["To ensure the goods are transported to the receiver in good condition", "To make the unpacking process more exciting for the receiver", "To use as much packing material as possible", "To allow the goods to be shipped without any documents"], correct: 0 },
{ question: "Packages help communication between:", options: ["The shipper and the carrier only", "The shipper and the receiver", "Different departments within the forwarding company", "The carrier and the customs authority"], correct: 1 },
{ question: "If a package contains fragile items, how should this be communicated?", options: ["Through a separate email to the carrier", "By using appropriate handling marks on the package itself", "By telling the truck driver verbally", "It does not need to be communicated; it is assumed"], correct: 1 },
{ question: "What is a potential consequence of unclear marking?", options: ["The goods will be delivered faster", "It can lead to incorrect handling and accidents", "The shipping cost will be reduced", "The package will be exempt from customs inspection"], correct: 1 },
{ question: "When using adhesive labels for marking, what is important?", options: ["That they are cheap and easy to produce", "That they are applied in a legible and durable manner", "That they are only placed on the top of the package", "That they are brightly coloured regardless of the text"], correct: 1 },
{ question: "The requirement to keep packing to a minimum in weight and dimensions is primarily to:", options: ["Make the package easier to carry by hand", "Reduce shipping costs", "Comply with international safety standards for packaging", "Make the package more environmentally friendly"], correct: 1 },
{ question: "Which of these is a 'Shipping Mark'?", options: ["Gross Weight: 25 kg", "Made in Vietnam", "FRAGILE", "Order No. 12345, Package 2 of 10"], correct: 3 },
{ question: "Which of these is an 'Information Mark'?", options: ["Handle with Care", "ACME Corp, London", "Dimensions: 30x40x50 cm", "Port of Rotterdam"], correct: 2 },
{ question: "Proper packaging protects goods from:", options: ["Changes in currency exchange rates", "The environment (e.g., moisture, impact)", "Political risks in the destination country", "Non-payment by the buyer"], correct: 1 },
{ question: "The package itself must also be protected against:", options: ["Financial fraud", "Theft", "Slow internet connection", "Incorrect invoicing"], correct: 1 },
{ question: "What does a 'Handling mark' directly instruct?", options: ["How to process the payment for the goods", "How the package should be physically handled and stored", "Who the final receiver of the goods is", "What is inside the package"], correct: 1 },
{ question: "The overall purpose of Unit 9 is to understand:", options: ["The legal liabilities of the freight forwarder", "The functions and importance of packing and marking in international shipping", "The different types of insurance available for cargo", "How to negotiate packing costs with the supplier"], correct: 1 },

/////////////////////////////
{ question: "UNIT 10 What is the broad definition of E-commerce according to the UK government?", options: ["Buying and selling goods online only", "The exchange of information across electronic networks at any stage in the supply chain", "Using email for business communication", "Online advertising and marketing"], correct: 1 },
{ question: "Which of the following is a key concern in E-commerce development?", options: ["The color of the website", "Trust in the provenance, reliability, and security of information", "The physical size of servers", "The brand of computers used"], correct: 1 },
{ question: "What is a fundamental component of E-commerce from a commercial perspective?", options: ["The company's office location", "The website and shopping cart", "The employee uniform", "The company's history"], correct: 1 },
{ question: "E-booking in freight forwarding allows customers to:", options: ["Track and trace shipments in real-time", "Avoid paying for services", "Bypass all customs procedures", "Manufacture goods online"], correct: 0 },
{ question: "What was the main goal of the IATA e-freight project launched in 2004?", options: ["To increase the amount of paper used", "To eliminate paper documents for air cargo shipments", "To slow down the shipping process", "To hire more administrative staff"], correct: 1 },
{ question: "How much could the industry save per year by implementing 100% paper-free air cargo shipping?", options: ["US$ 100 million", "US$ 500 million", "US$ 1.2 billion", "US$ 5 billion"], correct: 2 },
{ question: "Why was Customs declaration one of the earliest documents to be computerized?", options: ["Because it was the least important document", "To handle large volumes of documents in different formats and improve efficiency", "To make the documents harder to read", "Because customs officials had extra free time"], correct: 1 },
{ question: "How are most Customs declarations sent today?", options: ["By postal mail", "Via EDI (Electronic Data Interchange) messages", "Through social media", "By fax machine"], correct: 1 },
{ question: "What is a primary advantage of using email in business?", options: ["It requires no internet connection", "It is fast, low cost, and allows for multiple copies", "It eliminates the need for all other communication", "It guarantees immediate response"], correct: 1 },
{ question: "Microsoft Outlook is primarily known as:", options: ["A word processing software", "A spreadsheet application", "An email program and personal information manager", "A graphic design tool"], correct: 2 },
{ question: "What additional functions does Microsoft Outlook offer besides email?", options: ["Calendars, address books, and task reminders", "Video editing capabilities", "Payroll processing", "Manufacturing control systems"], correct: 0 },
{ question: "RFID stands for:", options: ["Radio Frequency Identification", "Real Fast Internet Delivery", "Registered Freight Identification", "Random File Information Data"], correct: 0 },
{ question: "What are the basic components of an RFID system?", options: ["Tag, Antenna, and Controller", "Computer, Mouse, and Keyboard", "Truck, Ship, and Plane", "Paper, Pen, and Printer"], correct: 0 },
{ question: "How does an RFID system work?", options: ["A reader sends radio waves, a tag receives them and sends back information", "It uses satellite imagery to track goods", "It requires manual entry of data at each checkpoint", "It relies on barcode scanners only"], correct: 0 },
{ question: "What is a major benefit of E-freight?", options: ["It increases paperwork", "It simplifies processes and reduces costs", "It makes shipping more complicated", "It requires more people to manage documents"], correct: 1 },
{ question: "E-CUS (Electronic Customs Service) helps to:", options: ["Slow down the customs clearance process", "Standardize documents and improve customs efficiency", "Hide information from customs authorities", "Avoid paying customs duties"], correct: 1 },
{ question: "What is a key feature of modern E-booking systems?", options: ["They operate on a real-time basis", "They are only available during business hours", "They require phone confirmation for every booking", "They use only paper-based forms"], correct: 0 },
{ question: "Which technology is a new introduction in the AIDC (Automatic Identification and Data Capture) field for logistics?", options: ["Typewriters", "RFID", "Smoke signals", "Messenger pigeons"], correct: 1 },
{ question: "What problem does E-freight aim to solve regarding documents per shipment?", options: ["Too few documents", "An average of 38 documents per shipment", "No documents at all", "Only digital documents are problematic"], correct: 1 },
{ question: "The 'shopping cart' is a component of:", options: ["A physical supermarket", "E-commerce websites", "Air freight cargo planes", "Warehouse storage systems"], correct: 1 },
{ question: "What does EDI stand for in the context of customs declarations?", options: ["Electronic Data Interchange", "Easy Document Input", "Estimated Delivery Information", "Emergency Dispatch Instruction"], correct: 0 },
{ question: "Microsoft Outlook can manage multiple email accounts such as:", options: ["Only Hotmail accounts", "POP, IMAP, and Exchange accounts", "Only company internal accounts", "No other accounts, just one"], correct: 1 },
{ question: "What is a significant advantage of RFID in logistics?", options: ["It makes tags very expensive", "It keeps track of assets that move with cargo", "It requires direct line-of-sight to read tags", "It has a very short range of a few centimeters"], correct: 1 },
{ question: "What was the estimated number of MAWB (Master Air Waybills) in 2004?", options: ["1 million", "10 million", "35 million", "100 million"], correct: 2 },
{ question: "Low-friction commerce transactions in E-commerce refer to:", options: ["Transactions with many obstacles and difficulties", "Quality and ease of use for consumers", "Transactions that involve physical friction", "Using only credit cards for payment"], correct: 1 },
{ question: "What kind of information can customers retrieve through E-booking systems?", options: ["The latest sailing or flight schedules", "The captain's name", "The cost of fuel for the vessel", "The personal details of other customers"], correct: 0 },
{ question: "Computerization of customs declarations helps ensure that documents:", options: ["Arrive later than the cargo", "Are stuck in the information chain", "Do not get lost and clear customs efficiently", "Are printed in color"], correct: 2 },
{ question: "An RFID tag consists of:", options: ["A microchip and an antenna", "A paper label and ink", "A barcode and a scanner", "A computer and a screen"], correct: 0 },
{ question: "The 'Server' is a component of E-commerce from a:", options: ["Commercial perspective", "Legal perspective", "Personal perspective", "Artistic perspective"], correct: 0 },
{ question: "The use of ICT in freight forwarding ultimately leads to:", options: ["More manual processes and errors", "Increased efficiency, transparency, and cost savings", "Higher reliance on paper-based systems", "Slower communication and decision-making"], correct: 1 },
///////////////////////////////////////////////////////////
{ question: "UNIT 1 What is a contract?", options: ["A non-binding agreement between friends", "A formal document used only in court", "A legally enforceable promise made between parties", "An internal company policy"], correct: 2 },
{ question: "According to the Kraljic Model, what does the 'Leverage' quadrant represent?", options: ["High profit impact, low supply risk", "Low profit impact, high supply risk", "High profit impact, high supply risk", "Low profit impact, low supply risk"], correct: 0 },
{ question: "Which contract type is typically used for 'Routine' items in the Kraljic Model?", options: ["Partnership Contract", "Framework Contract", "Spot Contract", "Fixed Term Contract"], correct: 2 },
{ question: "What is the first step in the contract formation process?", options: ["Draft the contract", "Determine who drafts the contract", "Agree to business terms", "Learn about the transaction"], correct: 2 },
{ question: "What is the purpose of contract laws?", options: ["To make business more complicated", "To set a framework for contract enforcement and resolve disputes", "To favor one party over another", "To eliminate the need for written agreements"], correct: 1 },
{ question: "A 'Voidable' contract is:", options: ["Automatically invalid from the beginning", "Binding, but one party can choose to set it aside", "Not enforceable by any party", "Only valid for a short period"], correct: 1 },
{ question: "What are 'Express Terms' in a contract?", options: ["Terms automatically inserted by law", "Statements made verbally or in writing by the parties", "Terms that are only implied", "The hidden meanings in a contract"], correct: 1 },
{ question: "When can terms in a signed contract be changed?", options: ["Never", "By one party without informing the other", "Only if both parties agree to the change", "Automatically after one year"], correct: 2 },
{ question: "The process where a party transfers its rights and obligations to a third party is called:", options: ["Termination", "Novation", "Litigation", "Mediation"], correct: 1 },
{ question: "Contracts can be formed through:", options: ["Written form only", "Verbal agreement or behavior only", "Written, verbal, or behavior", "Electronic form only"], correct: 2 },
{ question: "In the Kraljic Model, 'Bottleneck' items require:", options: ["Product standardization", "Volume insurance and control of vendors", "Exploration of full purchasing power", "Accurate demand forecasting"], correct: 1 },
{ question: "What is a key characteristic of a 'Strategic' item?", options: ["Low profit impact", "Requires development of long-term supply relationships", "Many available suppliers", "Standardized product"], correct: 1 },
{ question: "The main goal of the Kraljic Model is to:", options: ["Design marketing strategies", "Determine appropriate procurement strategies by optimizing costs and risks", "Hire new employees", "Set product prices"], correct: 1 },
{ question: "An 'Unenforceable contract' means:", options: ["It is automatically void", "No party can force the other to perform", "It is only binding for one party", "It must be renegotiated immediately"], correct: 1 },
{ question: "'Implied terms' in a contract are:", options: ["Clearly written by the parties", "Inserted into the contract by law automatically", "Only relevant in verbal agreements", "Not legally binding"], correct: 1 },
{ question: "What is a crucial reason for having most business contracts in writing?", options: ["To make them longer", "To minimize uncertainty and prove what was agreed", "To use more legal jargon", "To avoid negotiation"], correct: 1 },
{ question: "Which of these is an example of a contract formed by behavior?", options: ["Signing a detailed document", "Ordering food from a seller", "Boarding a taxi", "Sending an email"], correct: 2 },
{ question: "The Kraljic Model helps in classifying purchased items based on:", options: ["Color and size", "Supplier's location and employee count", "Profit impact and supply risk", "Brand name and packaging"], correct: 2 },
{ question: "After a novation, the original contract between A and B is:", options: ["Revised", "Extended", "Extinguished", "Suspended"], correct: 2 },
{ question: "What is the final step in the contract formation process listed?", options: ["Prepare to draft the contract", "Make logistics of drafting contract", "Draft the contract", "Agree to business terms"], correct: 2 },
{ question: "A contract is primarily an agreement that:", options: ["Is always friendly", "Binds parties to perform duties and obligations", "Does not involve any risks", "Is only used for large corporations"], correct: 1 },
{ question: "For 'Leverage' items, the recommended contract type is:", options: ["Spot Contract", "Fixed or Term Contract", "Framework or Call-Off Contract", "Partnership Contract"], correct: 2 },
{ question: "What is a primary function of contract law?", options: ["To allow greater business clarity", "To increase government control", "To make contracts secret", "To prevent all disputes"], correct: 0 },
{ question: "A 'Void contract' can result from:", options: ["A minor delay", "A mistake", "A successful negotiation", "A verbal agreement"], correct: 1 },
{ question: "Why are written contracts generally preferred in business?", options: ["They are more expensive", "They are harder to prove in court", "They minimize uncertainty", "They take less time to create"], correct: 2 },
{ question: "In novation, the new contract is formed between:", options: ["A and B only", "B and C only", "A and C", "The lawyers of A and B"], correct: 2 },
{ question: "The Kraljic Model is a tool for:", options: ["Financial accounting", "Portfolio purchasing analysis", "Human resource management", "Product design"], correct: 1 },
{ question: "Which factor is part of assessing 'supply risk' in the Kraljic Model?", options: ["The product's color", "The number of available suppliers", "The CEO's salary", "The company's marketing budget"], correct: 1 },
{ question: "What is a key element of a legally binding contract?", options: ["It must be notarized", "It must be an oral agreement", "It involves legally enforceable promises", "It is only for the sale of goods"], correct: 2 },
{ question: "The process of 'Learning about the transaction' in contract formation involves:", options: ["Understanding the deal's specifics before drafting", "Signing the contract immediately", "Ignoring the other party's needs", "Setting the price unilaterally"], correct: 0 },
//////////////////////////////////////////////////
{ question: "UNIT 2 Why are contract management teams formed for major projects?", options: ["To avoid any monitoring.", "To maximize team members' skills and resolve problems.", "To reduce the number of meetings.", "To work independently without collaboration."], correct: 1 },
{ question: "What is a key difference between a Work-Group and a Work-Team?", options: ["Work-Groups have collective performance goals; Work-Teams share information.", "Work-Teams have positive synergy; Work-Groups have neutral or negative synergy.", "Work-Groups have complementary skills; Work-Teams have random skills.", "Work-Teams have individual accountability; Work-Groups have mutual accountability."], correct: 1 },
{ question: "Which skill is considered 'INTERPERSONAL' for a Contract Manager?", options: ["Subject matter expertise.", "Good negotiation and influencing ability.", "Awareness of operational risks.", "Understanding the business."], correct: 1 },
{ question: "What is part of the daily work of a Contract Administrator?", options: ["Manufacturing products.", "Handling contracts, variations, and payments.", "Designing marketing campaigns.", "Recruiting new team members."], correct: 1 },
{ question: "An incompetent Contract Manager might lead to:", options: ["Improved worker safety.", "Accurate record-keeping.", "Acceptance of substandard work.", "Overstating costs."], correct: 2 },
{ question: "In a Work-Team, accountability is:", options: ["Only individual.", "Only mutual.", "Individual and mutual.", "Non-existent."], correct: 2 },
{ question: "What is a 'TECHNICAL' skill for a Contract Manager?", options: ["Effective communication.", "Ability to inspire change.", "Manages delivery, performance, and pricing models.", "Project management skills."], correct: 2 },
{ question: "Which task is NOT typically a daily duty of a Contract Manager?", options: ["Inspection & Monitoring Work.", "Liability for Negligent Decision-making.", "Delegation of Authority.", "Designing the company's logo."], correct: 3 },
{ question: "Withholding information is a potential implication of:", options: ["A highly competent manager.", "An incompetent Contract Manager.", "A successful project.", "A routine contract."], correct: 1 },
{ question: "The primary goal of forming a contract management team is to:", options: ["Create more paperwork.", "Enhance skills and manage the contract effectively.", "Isolate team members.", "Speed up the project without planning."], correct: 1 },
{ question: "Work-Teams are characterized by:", options: ["Random and varied skills.", "Complementary skills.", "Neutral synergy.", "Individual goals only."], correct: 1 },
{ question: "Which is a responsibility of a Contract Manager?", options: ["Writing the company's annual report.", "Driving the contract's execution phases.", "Cleaning the office.", "Managing the company's social media."], correct: 1 },
{ question: "What can an incompetent Contract Manager compromise?", options: ["The quality of office supplies.", "Workers' safety.", "The company's vacation policy.", "The color of the uniforms."], correct: 1 },
{ question: "What type of accountability does a Work-Group have?", options: ["Individual and mutual.", "Only mutual.", "Only individual.", "No accountability."], correct: 2 },
{ question: "A great Contract Manager needs the ability to:", options: ["Ignore risks.", "Inspire and manage change.", "Work only alone.", "Avoid communication."], correct: 1 },
{ question: "'Suspension of Work' is a duty handled by:", options: ["The marketing department.", "Contract Administrators/Managers.", "The IT support team.", "The receptionist."], correct: 1 },
{ question: "Creating inaccurate records is a sign of:", options: ["Excellent management.", "Incompetent contract management.", "A highly efficient team.", "A successful contract closure."], correct: 1 },
{ question: "The synergy in a Work-Team is generally:", options: ["Negative.", "Neutral.", "Positive.", "Non-existent."], correct: 2 },
{ question: "What is a core function of the contract management team?", options: ["To avoid all forms of decision-making.", "To monitor the project and avoid or resolve problems.", "To focus solely on individual tasks without collaboration.", "To delay project completion."], correct: 1 },
{ question: "Which skill is NOT listed under 'TECHNICAL' for a Contract Manager?", options: ["Understands the business.", "Has subject matter expertise.", "Good negotiation smarts.", "Is aware of operational and financial risks."], correct: 2 },
{ question: "What does 'Delegation of Authority' involve?", options: ["Giving decision-making power to others as appropriate.", "Ignoring authority lines.", "Keeping all authority to oneself.", "Eliminating all authority."], correct: 0 },
{ question: "Understating costs can be a result of:", options: ["Effective cost management.", "Incompetent contract management.", "A successful tender.", "A strategic partnership."], correct: 1 },
{ question: "The skills in a Work-Team are typically:", options: ["Identical for all members.", "Random and varied.", "Complementary.", "Not important."], correct: 2 },
{ question: "What is a key personal attribute for a Contract Manager?", options: ["Resistance to change.", "Ability to inspire and manage change.", "Avoiding negotiations.", "Working in isolation."], correct: 1 },
{ question: "'Payment' related tasks are part of the daily work for:", options: ["Contract Administrators/Managers.", "The logistics carrier only.", "The sales team.", "The customer service representative."], correct: 0 },
{ question: "Accepting substandard work is a potential consequence of:", options: ["Strict quality control.", "Incompetent contract management.", "A well-drafted contract.", "Effective team collaboration."], correct: 1 },
{ question: "The main objective of team formation is to:", options: ["Maximize individual workloads.", "Maximize collective skills and competencies.", "Reduce communication.", "Create a hierarchical bureaucracy."], correct: 1 },
{ question: "Which is a 'INTERPERSONAL' skill?", options: ["Manages the delivery model.", "Has industry expertise.", "Effective communication ability.", "Is aware of financial risks."], correct: 2 },
{ question: "What does 'Liability for Negligent Decision-making' refer to?", options: ["Responsibility for careful and informed decisions.", "The right to make any decision without consequence.", "Avoiding all decisions.", "Liability only for successful decisions."], correct: 0 },
{ question: "A Work-Group primarily aims to:", options: ["Achieve collective performance.", "Share information.", "Have mutual accountability.", "Develop complementary skills."], correct: 1 },
///////////////////////////////////////
{ question: "UNIT 3 What is the primary purpose of a Contract Management Plan?", options: ["To replace the actual contract.", "To serve as a useful tool for administering the contract.", "To eliminate the need for a contract manager.", "To focus only on financial aspects."], correct: 1 },
{ question: "According to the Contract Management Matrix, who typically makes decisions for 'ROUTINE' items?", options: ["Top levels (Vice-President)", "Medium levels (Chief buyers)", "Lower levels (Buyers, staff)", "External consultants"], correct: 2 },
{ question: "Which task is associated with the 'LEVERAGE' quadrant in the matrix?", options: ["Volume insurance", "Product standardization", "Exploration of full purchasing power", "Accurate demand forecast"], correct: 2 },
{ question: "A key characteristic of a good Contract Management Plan is that it is:", options: ["Rigid and unchangeable.", "Flexible and adaptable to changing circumstances.", "Only focused on cost.", "Written in legal jargon."], correct: 1 },
{ question: "What is Single Stage Selective Tendering?", options: ["A process where all interested suppliers can bid.", "A process restricting the number of tenderers invited.", "A method used only for small purchases.", "An illegal tender practice."], correct: 1 },
{ question: "In Design & Build Selective Tendering, who is solely responsible for the entire project?", options: ["The client", "The architect", "The contractor", "The contract manager"], correct: 2 },
{ question: "What should a client evaluate when a contractor wants the job?", options: ["The contractor's office location only.", "The level of risk and terms of contractual obligations.", "The contractor's employee vacation plans.", "The color of the contractor's logo."], correct: 1 },
{ question: "The Work Organization Chart typically includes:", options: ["Stakeholders, Project Sponsor, Project Manager, Project Teams.", "Only the Project Manager.", "Suppliers and customers only.", "Government regulators."], correct: 0 },
{ question: "The AOA (Activity On Arrow) technique is a tool of:", options: ["Financial Accounting", "Project Management", "Marketing Strategy", "Human Resources"], correct: 1 },
{ question: "What is a key component of 'POST-CONTRACT LIABILITIES'?", options: ["Office party planning", "Provider's guarantees and warranties", "Employee training schedules", "Marketing campaign results"], correct: 1 },
{ question: "The purpose of a Key Performance Matrix is to measure compliance with:", options: ["Employee satisfaction.", "Minimum contract requirements and tie in with performance incentives.", "The number of meetings held.", "The supplier's office size."], correct: 1 },
{ question: "What does the Documentation and Reporting Requirements specify?", options: ["Types of documents needed for deliveries, quality reports, etc.", "The menu for team lunches.", "The dress code for meetings.", "Vacation request forms."], correct: 0 },
{ question: "Invoice Review and Payment Procedures include reference to:", options: ["The contractor's favorite color.", "\"Provisional payment\" and \"retention money\".", "The client's personal hobbies.", "The weather forecast."], correct: 1 },
{ question: "Ancillary Agreements may include:", options: ["Licenses, permits, and third-party certifications.", "Lunch meeting agendas.", "Employee birthday lists.", "Travel itineraries."], correct: 0 },
{ question: "Contract Closeout occurs:", options: ["Before the contractor starts work.", "After the contractor completes the work scope and the organization verifies completion.", "In the middle of the project.", "Only if the project fails."], correct: 1 },
{ question: "For 'STRATEGIC' items in the matrix, decision-making is at the:", options: ["Lower levels", "Medium levels", "Top levels", "No specific level"], correct: 2 },
{ question: "A Contract Management Plan helps to identify:", options: ["Who is responsible for various contract administration activities.", "The best restaurants for client dinners.", "The cheapest airfare.", "Employee vacation preferences."], correct: 0 },
{ question: "In tender decisions, if a contract is risky, a contractor might:", options: ["Ignore the risk.", "Add a substantial premium in the bid.", "Lower the bid price.", "Withdraw immediately."], correct: 1 },
{ question: "The Contract Management Matrix for 'BOTTLENECK' items requires:", options: ["Product standardization.", "Volume insurance and control of vendors.", "Exploration of purchasing power.", "Accurate demand forecast."], correct: 1 },
{ question: "What is a vital focus of contract administration aspects?", options: ["Ordering procedures and payment procedures.", "Employee social events.", "Office decoration.", "Company car selection."], correct: 0 },
{ question: "The team leader in a contract management plan should have a clear:", options: ["Line of authority.", "Vacation schedule.", "Personal budget.", "Hobby list."], correct: 0 },
{ question: "What is a purpose of performance measures in the plan?", options: ["To create unnecessary work.", "To tie in with performance reward criteria.", "To delay payments.", "To complicate the process."], correct: 1 },
{ question: "What must be recognized regarding contingency payments?", options: ["They are never needed.", "They may arise due to unforeseen problems.", "They are only for employee bonuses.", "They are illegal."], correct: 1 },
{ question: "Strict compliance to contract terms may require specific documents like:", options: ["Bills of Lading and Letters of Indemnity.", "Menus from local restaurants.", "Travel brochures.", "Employee attendance sheets."], correct: 0 },
{ question: "What is a key element of Post Award Administration?", options: ["Setting up systems to manage the contract.", "Planning the project launch party.", "Ordering new office furniture.", "Designing a new logo."], correct: 0 },
{ question: "Variation Administration is necessary because:", options: ["Changes to a contract are unavoidable.", "Contracts are never changed.", "Changes are always bad.", "Only the client can request changes."], correct: 0 },
{ question: "A contract review in Close-out Administration deals with:", options: ["Time, cost, and quality aspects of performance.", "The client's personal life.", "The contractor's family history.", "Future unrelated projects."], correct: 0 },
{ question: "The Contract Management Plan serves as an executive summary of:", options: ["The roles and responsibilities of the contracting parties.", "The company's financial history.", "Employee performance reviews.", "Market trends for the next decade."], correct: 0 },
{ question: "In the tendering process, pre-selecting a limited number of contractors is done in:", options: ["Open tendering.", "Single Stage Selective Tendering.", "Illegal tendering.", "No specific method."], correct: 1 },
{ question: "The client must acknowledge the contractor's cash flow especially by:", options: ["Tax-year-end.", "The contractor's birthday.", "Public holidays.", "The end of the week."], correct: 0 },
/////////////////////////////////////////
{ question: "UNIT 4 What is the first step in the Risk Management Process?", options: ["Implement Treatment", "Identify Risks", "Establish Context", "Monitor and Review"], correct: 2 },
{ question: "Which of these is a method for 'TREATING RISKS'?", options: ["Ignoring all risks", "Transfer of Risk", "Creating more risks", "Hiding risks"], correct: 1 },
{ question: "Political risks, such as port shutdowns, are classified as:", options: ["Internal Risks", "External Risks", "Financial Risks", "Operational Risks"], correct: 1 },
{ question: "What is a 'Cost Risk'?", options: ["Incomplete and/or incorrect specifications.", "A guaranteed profit.", "A decrease in market competition.", "Perfect supplier performance."], correct: 0 },
{ question: "Commercial Risks include:", options: ["Business Downturn.", "Changes in weather patterns.", "Employee vacation schedules.", "Office decoration costs."], correct: 0 },
{ question: "What is a Contract Risks Register used for?", options: ["To identify and spell out all possible risks.", "To record employee attendance.", "To plan social events.", "To track office supply usage."], correct: 0 },
{ question: "The step 'Assess Risks' involves:", options: ["Identifying, analyzing, rating, and prioritizing risks.", "Ignoring risks.", "Implementing solutions immediately.", "Celebrating success."], correct: 0 },
{ question: "Force Majeure is a type of:", options: ["Commercial Risk.", "Financial Risk.", "Strategic Risk.", "Operational Risk."], correct: 0 },
{ question: "What should be constantly done with a Risk Register?", options: ["It should be monitored, reviewed, and maintained.", "It should be hidden from the team.", "It should be created once and never looked at again.", "It should be deleted after the project starts."], correct: 0 },
{ question: "Risk treatment option 'Doing Nothing' means:", options: ["Actively avoiding the risk.", "Accepting the risk without action.", "Transferring the risk.", "Insuring against the risk."], correct: 1 },
{ question: "What is the final step in the Risk Management Process?", options: ["Establish Context", "Assess Risks", "Implement Treatment", "Monitor and Review"], correct: 3 },
{ question: "Supplier type risks, like stoppage of exports, are:", options: ["External Risks.", "Internal Risks.", "Always preventable.", "Not important."], correct: 0 },
{ question: "A possible reason for adverse budget variances is:", options: ["Perfect planning.", "Unexpected operational costs.", "Decreased supplier costs.", "Over-performance."], correct: 1 },
{ question: "What does the 'Establish Context' step determine?", options: ["Key business objectives, processes, and resources.", "The color of the risk register.", "The team's favorite coffee brand.", "The project's end date only."], correct: 0 },
{ question: "Grading the likelihood of risks occurring is part of:", options: ["The Risk Register.", "The invoice process.", "The team building exercise.", "The marketing plan."], correct: 0 },
{ question: "'Acceptance of Risk' is a method of:", options: ["Risk Treatment.", "Risk Creation.", "Risk Ignorance.", "Risk Celebration."], correct: 0 },
{ question: "Social and cultural risks include:", options: ["Changing habits and food tastes.", "Stable market conditions.", "Guaranteed demand.", "Perfect supplier relationships."], correct: 0 },
{ question: "The Risk Register should document the contingency payout:", options: ["Properly and chronologically.", "In a random order.", "Only at the end of the project.", "Never."], correct: 0 },
{ question: "What is a key part of the 'Implement Treatment' step?", options: ["Establish a risk management plan and implement controls.", "Identify risks only.", "Ignore all treatments.", "Celebrate the identified risks."], correct: 0 },
{ question: "What type of risk is related to 'cash flow problems'?", options: ["Commercial Risk", "Political Risk", "Ecological Risk", "Technological Risk"], correct: 0 },
{ question: "The Risk Management Process is:", options: ["A one-time activity.", "A continuous cycle.", "Only for large projects.", "Not necessary for contracts."], correct: 1 },
{ question: "An overall contract budget in the Risk Register helps provide:", options: ["An overview of the contract and key financial elements.", "Details of employee salaries.", "The client's personal budget.", "The cost of office parties."], correct: 0 },
{ question: "What factors could trigger the risks? This question is part of:", options: ["The Risk Register.", "The performance review.", "The team meeting agenda.", "The payment schedule."], correct: 0 },
{ question: "Risk 'Avoidance' involves:", options: ["Completely avoiding the risky activity.", "Accepting the risk.", "Transferring the risk to someone else.", "Ignoring the risk."], correct: 0 },
{ question: "Monitoring and Review involves checking:", options: ["The operation of controls and suitability of treatments.", "The team's lunch preferences.", "The client's vacation plans.", "The supplier's office location."], correct: 0 },
{ question: "A man-hour budget for the contract management team should be:", options: ["Set out and charted.", "Kept secret.", "Ignored.", "Determined by the client alone."], correct: 0 },
{ question: "What impact would the risk have on contract implementation? This is considered in the:", options: ["Risk Register.", "Invoice.", "Marketing brochure.", "Employee handbook."], correct: 0 },
{ question: "'Insurance of Risk' is a method to:", options: ["Transfer the financial impact of risk.", "Avoid the risk.", "Ignore the risk.", "Create new risks."], correct: 0 },
{ question: "The step 'Assess Risks' comes after:", options: ["Establish Context.", "Implement Treatment.", "Monitor and Review.", "Identify Risks only."], correct: 0 },
{ question: "The Risk Register forms the basis for understanding the:", options: ["Financial impact of problems on a contract.", "Number of team members.", "Client's personal wealth.", "Supplier's employee count."], correct: 0 },
/////////////////////////////////////////////////
{ question: "UNIT 5 What is the primary purpose of performance measurement in contracts?", options: ["To increase paperwork", "To track progress against time, cost, and quality requirements", "To eliminate all risks", "To reduce communication with suppliers"], correct: 1 },
{ question: "Which parameter is NOT typically used for measuring contract performance?", options: ["Progress against time schedules", "Progress against costs budget", "Progress against quality requirements", "Progress against employee vacation time"], correct: 3 },
{ question: "A review report of performance should include:", options: ["A summarized report on overall progress", "Details of the contractor's personal life", "The client's favorite color", "Office gossip"], correct: 0 },
{ question: "What is a common reason for adverse budget variances?", options: ["Perfect planning", "Incomplete specifications", "Decreased material costs", "Improved efficiency"], correct: 1 },
{ question: "Which factor affects outcome measurement in contract performance?", options: ["Lead order time", "Contractor's office location", "Client's personal preferences", "Weather forecasts"], correct: 0 },
{ question: "The main purpose of a contract review meeting is to:", options: ["Discuss weekend plans", "Establish contract performance status and pinpoint deviations", "Plan social events", "Avoid discussing problems"], correct: 1 },
{ question: "Benchmarking is described as:", options: ["A one-time activity", "A continuous and structured process for improvement", "A way to hide performance issues", "Only for financial measurements"], correct: 1 },
{ question: "What is the first step in the benchmarking process?", options: ["Plan and implement", "Select subject and understand processes", "Communicate findings", "Analyze process gaps"], correct: 1 },
{ question: "Which of these is NOT part of outcome measurement?", options: ["Start of manufacture", "Availability of raw materials", "Contractor's employee names", "Port congestion"], correct: 2 },
{ question: "Performance measurement against schedule may require:", options: ["A revised Gantt chart", "New office furniture", "Changing the contract manager", "Ignoring delays"], correct: 0 },
{ question: "Cost-plus contracts with cost over-runs can lead to:", options: ["Adverse budget variances", "Guaranteed profits", "Automatic contract extension", "Reduced paperwork"], correct: 0 },
{ question: "What should be reviewed in a contract review meeting?", options: ["The contract risks register", "Employee personal files", "Office decoration plans", "Supplier's vacation photos"], correct: 0 },
{ question: "Benchmarking helps to:", options: ["Find and implement best practices", "Hide poor performance", "Increase costs", "Delay projects"], correct: 0 },
{ question: "Documentation delays are part of measuring:", options: ["Outcome", "Employee satisfaction", "Office temperature", "Coffee consumption"], correct: 0 },
{ question: "The final step in benchmarking is:", options: ["Plan, implement and monitor", "Select subject", "Ignore results", "Celebrate without action"], correct: 0 },
{ question: "What might a performance review report include regarding areas of concern?", options: ["Issues that need to be addressed", "Employee birthday lists", "Office party plans", "Supplier's favorite colors"], correct: 0 },
{ question: "Increased manpower costs can contribute to:", options: ["Adverse budget variances", "Improved quality", "Faster completion", "Better relationships"], correct: 0 },
{ question: "In contract review meetings, actions from previous meetings should be:", options: ["Reviewed", "Ignored", "Deleted", "Hidden"], correct: 0 },
{ question: "Warehouse receiving & releasing times affect:", options: ["Outcome measurement", "Employee vacations", "Office decoration", "Client's personal schedule"], correct: 0 },
{ question: "Analyzing process gaps is part of:", options: ["Benchmarking", "Invoice processing", "Office cleaning", "Social media management"], correct: 0 },
{ question: "Unexpected operational costs can cause:", options: ["Budget variances", "Improved performance", "Automatic success", "Reduced risks"], correct: 0 },
{ question: "The purpose of measuring against quality requirements is to ensure:", options: ["Products/services meet specified standards", "Employees are happy", "Office is clean", "Suppliers are wealthy"], correct: 0 },
{ question: "What should be done with new risks identified in review meetings?", options: ["Include them in the risk register", "Ignore them", "Delete them", "Hide them"], correct: 0 },
{ question: "Transportation schedules impact:", options: ["Outcome measurement", "Employee morale only", "Office supplies", "Client's personal life"], correct: 0 },
{ question: "Communicating findings and gaining acceptance is a step in:", options: ["Benchmarking", "Risk avoidance", "Cost reduction", "Office management"], correct: 0 },
{ question: "Local trucking and traffic congestion can affect:", options: ["Contract outcome", "Employee salaries", "Office size", "Client's hobbies"], correct: 0 },
{ question: "The main goal of performance measurement is to:", options: ["Ensure contract objectives are met", "Increase paperwork", "Make work more difficult", "Please the client personally"], correct: 0 },
{ question: "Customs inspection and clearance delays impact:", options: ["Outcome measurement", "Employee benefits", "Office location", "Client's vacation plans"], correct: 0 },
{ question: "Setting targets for measures is part of:", options: ["Benchmarking", "Office decoration", "Social planning", "Employee evaluation only"], correct: 0 },
{ question: "Hiccups in the manufacturing process are considered in:", options: ["Outcome measurement", "Employee satisfaction surveys", "Office party planning", "Client's personal diary"], correct: 0 },
//////////////////////////////////////
{ question: "UNIT 6 What is the first phase in the Procurement Life Cycle Model?", options: ["Planning", "Contract Award", "Contract Management", "Delivery Management"], correct: 0 },
{ question: "Contract Administration involves monitoring:", options: ["Budgets, schedules, and technical performance", "Employee personal lives", "Office decoration", "Supplier's vacation plans"], correct: 0 },
{ question: "What is a vital focus of contract administration?", options: ["Ordering procedures and payment procedures", "Employee hobbies", "Office parties", "Social media activity"], correct: 0 },
{ question: "Post Award Administration requires:", options: ["Setting up systems to manage the contract", "Ignoring the contract", "Changing the contract manager", "Deleting all documents"], correct: 0 },
{ question: "Variation Administration is necessary because:", options: ["Changes to contracts are unavoidable", "Contracts never change", "Changes are always bad", "Only the client can request changes"], correct: 0 },
{ question: "Who is best suited to consider contract change requests?", options: ["Contract manager or person with overall contract knowledge", "The office cleaner", "The security guard", "The receptionist"], correct: 0 },
{ question: "Post Contract Administration begins when:", options: ["Products/services are delivered and warranty period ends", "The contract is signed", "The project starts", "The client goes on vacation"], correct: 0 },
{ question: "Close-out Administration involves a contract review that deals with:", options: ["Time, cost, and quality aspects", "Employee personal issues", "Office supplies", "Supplier's family history"], correct: 0 },
{ question: "What is an important notice for contract administration?", options: ["Make sure all team understand the contract", "Hide the contract from the team", "Ignore contract terms", "Change the contract without notice"], correct: 0 },
{ question: "Contract closeout occurs after:", options: ["Contractor completes work and organization verifies completion", "The contract is signed", "The first payment is made", "The client changes their mind"], correct: 0 },
{ question: "What must be documented during contract administration?", options: ["Contractual changes", "Employee gossip", "Office lunch menus", "Supplier's favorite colors"], correct: 0 },
{ question: "Operational workflow and procedures are part of:", options: ["Contract administration aspects", "Employee personal development", "Office decoration plans", "Social event planning"], correct: 0 },
{ question: "In Post Award Administration, key information must be provided to:", options: ["The contract management team", "The public", "Competing suppliers", "The media"], correct: 0 },
{ question: "What should be monitored during contract administration?", options: ["Targets and milestones", "Employee social media", "Office temperature", "Supplier's personal life"], correct: 0 },
{ question: "A contract review in close-out may assess:", options: ["Supplier's overall performance", "Employee vacation plans", "Office furniture quality", "Client's personal preferences"], correct: 0 },
{ question: "Compliance with notice conditions is:", options: ["An important notice for contract administration", "Not important", "Optional", "Only for large contracts"], correct: 0 },
{ question: "All key documents need to be during Post Award Administration:", options: ["Collated and distributed", "Destroyed", "Hidden", "Ignored"], correct: 0 },
{ question: "What is part of contract administration aspects?", options: ["Ensuring quality", "Planning office parties", "Choosing employee uniforms", "Selecting office music"], correct: 0 },
{ question: "Contract administration includes controlling:", options: ["Changes and variations", "Employee salaries", "Office hours", "Supplier's personal expenses"], correct: 0 },
{ question: "The contract review in close-out is sometimes called:", options: ["A post-mortem", "A celebration", "A party", "A vacation"], correct: 0 },
{ question: "Management reporting is a vital focus of:", options: ["Contract administration", "Employee entertainment", "Office cleaning", "Social activities"], correct: 0 },
{ question: "What must be followed according to important notices?", options: ["The contract terms", "Employee suggestions only", "Supplier's personal requests", "Client's hobbies"], correct: 0 },
{ question: "Post Contract Administration requires fulfilling:", options: ["The organization's check-list", "Employee personal wishes", "Supplier's vacation plans", "Client's family requests"], correct: 0 },
{ question: "Close-out administration may occur:", options: ["Prior to contract completion", "Only after 10 years", "Never", "Only if the project fails"], correct: 0 },
{ question: "What is part of the Procurement Life Cycle?", options: ["Relationship Management", "Employee social management", "Office party management", "Vacation management"], correct: 0 },
{ question: "Authorization to begin work is part of:", options: ["Contract administration aspects", "Employee hiring process", "Office setup", "Supplier selection"], correct: 0 },
{ question: "Cost monitoring is a function of:", options: ["Contract administration", "Employee satisfaction", "Office decoration", "Social media management"], correct: 0 },
{ question: "The contract review in close-out examines:", options: ["Risks anticipated and actual occurrences", "Employee personal files", "Office supply costs", "Supplier's office location"], correct: 0 },
{ question: "What should be set up to manage the contract in Post Award?", options: ["Systems like accounting ledger", "New office furniture", "Social events", "Employee benefits"], correct: 0 },
{ question: "Ensuring all team members understand the contract is:", options: ["An important notice", "Not necessary", "Only for managers", "Optional for small contracts"], correct: 0 },
///////////////////////////////
{ question: "UNIT 7 What is the primary learning objective for contract termination?", options: ["To terminate a contract properly", "To avoid all contracts", "To create more disputes", "To extend contracts indefinitely"], correct: 0 },
{ question: "In partner relationships, what does 'value share' indicate?", options: ["Clear purpose of cooperation between two parties", "Sharing personal assets", "Dividing office space", "Exchanging employee salaries"], correct: 0 },
{ question: "What should be the final resort in dispute resolution according to the unit?", options: ["Litigation", "Negotiation", "Mediation", "Conciliation"], correct: 0 },
{ question: "Which is NOT a characteristic of partnership treatment?", options: ["Hidden operations and data", "Regular meetings between parties", "Clear expectations from both parties", "Transparent in relevant operations"], correct: 0 },
{ question: "What is the main advantage of negotiation in dispute resolution?", options: ["Convenient, fast, and inexpensive", "Always legally binding", "Requires no communication", "Guaranteed win for one party"], correct: 0 },
{ question: "Which dispute resolution means involves a neutral third party facilitating discussion?", options: ["Mediation", "Litigation", "Arbitration", "Negotiation"], correct: 0 },
{ question: "What is a key disadvantage of negotiation?", options: ["Results are not legally enforced", "Always expensive", "Takes years to complete", "Requires government approval"], correct: 0 },
{ question: "What does 'being in the same front-line' mean in partnerships?", options: ["Working together towards common goals", "Competing against each other", "Working in different industries", "Avoiding contact with each other"], correct: 0 },
{ question: "Which dispute resolution method is typically most formal?", options: ["Litigation", "Negotiation", "Conciliation", "Mediation"], correct: 0 },
{ question: "What is essential for successful partnership relationships?", options: ["Deep and wide integration", "Complete separation of operations", "Hidden agendas", "Limited communication"], correct: 0 },
{ question: "What should be pre-empted in contract management?", options: ["Conflicts", "Profits", "Celebrations", "Employee promotions"], correct: 0 },
{ question: "Which is a key element of partnership treatment?", options: ["Special policies and supports between parties", "Random communication", "Unclear expectations", "Secret operations"], correct: 0 },
{ question: "What is the main purpose of dispute resolution mechanisms?", options: ["To resolve conflicts effectively", "To create more conflicts", "To avoid communication", "To delay solutions"], correct: 0 },
{ question: "In Vietnam, which laws can govern contracts?", options: ["Vietnamese Law or Foreign Law", "Only Vietnamese Law", "Only Foreign Law", "No specific laws"], correct: 0 },
{ question: "What protects business secrets in negotiation?", options: ["The private nature of negotiations", "Public announcements", "Government interference", "Media coverage"], correct: 0 },
{ question: "What is crucial for avoiding conflicts?", options: ["Understanding contract details", "Ignoring contract terms", "Hiding information", "Working independently"], correct: 0 },
{ question: "Which dispute resolution method depends entirely on parties' willingness?", options: ["Negotiation", "Litigation", "Arbitration", "Court judgment"], correct: 0 },
{ question: "What type of relationship do partnerships typically have?", options: ["Very long-term", "Short-term only", "One-time interaction", "Random contact"], correct: 0 },
{ question: "What is a disadvantage of negotiation?", options: ["Depends on parties' goodwill and cooperation", "Always produces immediate results", "Guaranteed success", "Requires no effort"], correct: 0 },
{ question: "What should be transparent in partnership operations?", options: ["Relevant data and techniques", "Employee salaries only", "Company profits only", "Personal information"], correct: 0 },
{ question: "What is the concept regarding litigation?", options: ["It should be the final resort", "It should be the first option", "It should be avoided completely", "It should be used for all disputes"], correct: 0 },
{ question: "What helps in pre-empting conflicts?", options: ["Attention to contract details", "Ignoring potential issues", "Working in isolation", "Hiding problems"], correct: 0 },
{ question: "Which dispute resolution method involves a binding decision by a third party?", options: ["Arbitration", "Negotiation", "Mediation", "Conciliation"], correct: 0 },
{ question: "What is important for partnership integration?", options: ["Clear KPIs for integrative operations", "Vague performance measures", "Secret objectives", "Individual goals only"], correct: 0 },
{ question: "What affects negotiation results?", options: ["Understanding and attitude of parties", "Weather conditions", "Office location", "Employee uniforms"], correct: 0 },
{ question: "What type of information flow is normal in partnerships?", options: ["Good IT-supported information flow", "No information sharing", "Random communication", "Secret messages"], correct: 0 },
{ question: "What is a key benefit of conciliation?", options: ["Third-party assistance in reaching agreement", "Automatic binding decisions", "No communication needed", "Government-controlled process"], correct: 0 },
{ question: "What should be summarized regarding contracts?", options: ["Importance of details", "Only the price terms", "Just the signing date", "The font size used"], correct: 0 },
{ question: "What do partnerships typically involve selling?", options: ["Goods or services together", "Competing products", "Nothing", "Only services"], correct: 0 },
{ question: "What is the foundation of successful relationship management?", options: ["Clear expectations and regular communication", "Hidden agendas", "Limited interaction", "Secret operations"], correct: 0 }





];

// ======== DOM ELEMENTS ========
const tabQuestionsBtn = document.getElementById("tabQuestions");
const tabTestBtn = document.getElementById("tabTest");
const questionBank = document.getElementById("questionBank");
const testMode = document.getElementById("testMode");
const questionList = document.getElementById("questionList");
const startTestBtn = document.getElementById("startTest");
const testArea = document.getElementById("testArea");
const testQuestionsDiv = document.getElementById("testQuestions");
const submitTestBtn = document.getElementById("submitTest");
const testResult = document.getElementById("testResult");

// ======== TAB SWITCHING ========
tabQuestionsBtn.addEventListener("click", () => switchTab("questions"));
tabTestBtn.addEventListener("click", () => switchTab("test"));
function switchTab(tab){
  if(tab==="questions"){
    tabQuestionsBtn.classList.add("active");
    tabTestBtn.classList.remove("active");
    questionBank.classList.add("active");
    testMode.classList.remove("active");
  } else {
    tabTestBtn.classList.add("active");
    tabQuestionsBtn.classList.remove("active");
    testMode.classList.add("active");
    questionBank.classList.remove("active");
  }
}

// ======== LOAD QUESTION BANK ========
function loadQuestions(){
  questionList.innerHTML="";
  if(!questions.length){ 
    questionList.innerHTML="<p>No questions yet.</p>"; 
    return;
  }
  questions.forEach((q,index)=>{
    const div=document.createElement("div");
    div.className="question";
    div.innerHTML=`<h3>Q${index+1}. ${q.question}</h3>`+
      q.options.map((opt,i)=>`<span class="option" onclick="checkAnswer(this,${i},${q.correct})">${opt}</span>`).join(" ");
    questionList.appendChild(div);
  });
}

// ======== CHECK ANSWER (QUESTION BANK TAB) ========
function checkAnswer(el, selected, correct){
  const options = el.parentNode.querySelectorAll(".option");
  options.forEach(o=>o.classList.remove("correct","wrong"));
  if(selected===correct){
    el.classList.add("correct"); // green
  } else {
    el.classList.add("wrong");   // red
    options[correct].classList.add("correct"); // show correct = green
  }
}

// ======== TEST MODE ========
startTestBtn.addEventListener("click", startTest);
let currentTest = [];
let userAnswers = {};

function startTest(){
  if(questions.length < 50){
    alert("You need at least 50 questions to start the test!");
    return;
  }
  currentTest = getRandomQuestions(questions,50);
  testArea.classList.remove("hidden");
  testResult.innerHTML="";
  testQuestionsDiv.innerHTML="";
  submitTestBtn.classList.remove("hidden");
  userAnswers={};

  currentTest.forEach((q,index)=>{
    const div=document.createElement("div");
    div.className="question";
    div.innerHTML=`<h3>Q${index+1}. ${q.question}</h3>`+
      q.options.map((opt,i)=>`<span class="option" data-index="${i}" onclick="selectOption(this,${index})">${opt}</span>`).join(" ");
    testQuestionsDiv.appendChild(div);
  });
}

// ======== RANDOM 50 QUESTIONS ========
function getRandomQuestions(arr,num){
  const shuffled = [...arr].sort(()=>0.5-Math.random());
  return shuffled.slice(0,num);
}

// ======== SELECT OPTION IN TEST ========
function selectOption(el,qIndex){
  const options = el.parentNode.querySelectorAll(".option");
  options.forEach(o=>o.classList.remove("selected"));
  el.classList.add("selected");
  userAnswers[qIndex] = parseInt(el.dataset.index);
}

// ======== SUBMIT TEST ========
submitTestBtn.addEventListener("click",()=>{
  let score=0;
  currentTest.forEach((q,i)=>{
    const options = testQuestionsDiv.children[i].querySelectorAll(".option");
    if(userAnswers[i]===q.correct) {
      score++;
      options[q.correct].classList.add("correct"); // green
    } else {
      if(userAnswers[i]!=null) options[userAnswers[i]].classList.add("wrong"); // red
      options[q.correct].classList.add("correct"); // green
    }
  });
  testResult.innerHTML=`You scored <strong>${score}/50</strong>`;
  submitTestBtn.classList.add("hidden");
});

// ======== INITIAL LOAD ========
loadQuestions();
