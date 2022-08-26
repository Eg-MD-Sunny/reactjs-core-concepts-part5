import './App.css';

const number = 55555;
const singers = [
	{name:'Dr. Mahfuz', job:'Singer'},
	{name:'Eva Rahman', job:'Singer2'},
	{name:'Argun', job:'sopno'},
	{name:'Shuvro', job:'pathor'}
]
function App() {
	const nayoks = ['Rubel','BappaDa','Kuber','Jahim','Salman Shah','Riyaz','Razzak','Anwar'];
	return (
		<div className="App">
			{
				nayoks.map(nayok=><li>Name: {nayok}</li>)
			}

			{/* {
				nayoks.map(nayok=><Person name={nayok}></Person>)
			} */}

			{
				singers.map(singer=><Person name={singer.name}></Person>)
			}
			{/*Function Call*/}

			{/* <Person name={nayoks[0]} nayika="moushumi"></Person>
			<Person name={nayoks[1]} nayika="cheka"></Person>
			<Person name={nayoks[2]} nayika="kopila"></Person> */}

			<h5>New Component YAY</h5>
			<p id="totoCompany">Rock Mara React Mama</p>
			<Friend movie="Shingam" phone="01753732068"></Friend>
			<Friend phone="01516111123"></Friend>
		</div>
	);
}

/*Create Function*/
function Person(props){
	// Showing data in Props
	console.log(props);

	return (
		<div className='person'>
			<h1>{props.name}</h1>
			<p>{props.nayika}</p>
		</div>
	)
}
function Friend(props){
	console.log(props)
	return (
		<div className="container">
			<h3>Name: {props.movie}</h3>
			<p>Phone: {props.phone}</p>
		</div>
	)
}



export default App;
