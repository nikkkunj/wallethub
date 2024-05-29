/**
 * In the following React template, create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. 
 * Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered.
 * This way the application can function as a simple phone book. 
 * When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
 * 
    First name = Coder
    Last name = Byte
    Phone = 8885559999
 * 
 */

    import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    const style = {
        table: {
            borderCollapse: "collapse"
        },
        tableCell: {
            border: '1px solid gray',
            margin: 0,
            padding: '5px 10px',
            width: 'max-content',
            minWidth: '150px'
        },
        form: {
            container: {
                padding: '20px',
                border: '1px solid #F0F8FF',
                borderRadius: '15px',
                width: 'max-content',
                marginBottom: '40px'
            },
            inputs: {
                marginBottom: '5px'
            },
            submitBtn: {
                marginTop: '10px',
                padding: '10px 15px',
                border: 'none',
                backgroundColor: 'lightseagreen',
                fontSize: '14px',
                borderRadius: '5px'
            }
        }
    } as const;
    
    function PhoneBookForm({ addEntryToPhoneBook }) {
        const [userFirstname,setUserFirstname] = useState('Coder');
        const [userLastname,setUserLastname] = useState('Byte');
        const [userPhone,setUserPhone] = useState('8885559999');
        const handleAddUser = ()=>{
            addEntryToPhoneBook({'fname':userFirstname,'lname':userLastname,'phone':userPhone});
        }
        return (
            <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
                <label>First name:</label>
                <br />
                <input
                    style={style.form.inputs}
                    className='userFirstname'
                    name='userFirstname'
                    type='text' 
                    value={userFirstname}
                    onChange={(e)=>setUserFirstname(e.target.value)}
                />
                <br />
                <label>Last name:</label>
                <br />
                <input
                    style={style.form.inputs}
                    className='userLastname'
                    name='userLastname'
                    type='text'
                    value={userLastname}
                    onChange={(e)=>setUserLastname(e.target.value)}
                />
                <br />
                <label>Phone:</label>
                <br />
                <input
                    style={style.form.inputs}
                    className='userPhone'
                    name='userPhone'
                    type='text'
                    value={userPhone}
                    onChange={(e)=>setUserPhone(e.target.value)}
                />
                <br />
                <input
                    style={style.form.submitBtn}
                    className='submitButton'
                    type='submit'
                    value='Add User' onClick={handleAddUser}
                />
            </form>
        )
    }
    
    function InformationTable(props) {
        console.log(props.list)
        props.list.sort((a,b)=>{
            if (a.lname < b.lname)
                return -1;
            if (a.lname > b.lname)
                return 1;
            else
                return 0;
        })
        console.log(props.list)
        return (
            <table style={style.table} className='informationTable'>
                <thead>
                    <tr>
                        <th style={style.tableCell}>First name</th>
                        <th style={style.tableCell}>Last name</th>
                        <th style={style.tableCell}>Phone</th>
                    </tr>
                </thead>
                <tbody>
                {props.list.map((user)=>{
                        return (
                            <tr>
                                <td style={style.tableCell}>{user.fname}</td>
                                <td style={style.tableCell}>{user.lname}</td>
                                <td style={style.tableCell}>{user.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
    
    function Application(props) {
        const [userData , setUserData] = useState([]);
        const addEntryToPhoneBook = (user)=>{
            setUserData(prevState =>[...prevState , user])
        }
        return (
            <section>
                <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
                <InformationTable list={userData}/>
            </section>
        );
    }
    
    ReactDOM.render(
        <Application />,
        document.getElementById('test-03')
    );