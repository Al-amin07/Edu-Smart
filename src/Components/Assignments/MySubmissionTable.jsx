import PropTypes from 'prop-types'

const MySubmissionTable = ({submission}) => {
    const { name, title, marks, status, userEmail} = submission;
    return (
    //     <tr>
    //     <th>{i}</th>
    //     <td>{name}</td>
    //     <td>{title}</td>
    //     <td>{status}</td>
    //   </tr>
    <div className="p-10 shadow-2xl bg-base-200 rounded-xl space-y-4 ">
        <h2 className="text-2xl font-medium">Assignment Title : {title}</h2>
        <p className='text-xl font-medium'>Name : {name}</p>
        <p className='text-xl font-medium'>Email : {userEmail}</p>
        <p className='text-green-600 font-bold text-lg'>Status : {status}</p>
        <p className='text-xl font-bold'>Obtained Marks : {status === 'pending' ? 'N/A' : {marks}}</p>
        <p className='font-light '>Feedback : {status === 'pending' ? 'N/A' : {}}</p>
    </div>
    );
};
MySubmissionTable.propTypes = {
    submission: PropTypes.object,
    
}

export default MySubmissionTable;