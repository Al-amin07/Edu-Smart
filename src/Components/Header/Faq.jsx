
import faq from '../../../public/faq3.jpg'
const Faq = () => {
  return (
   <div className='my-16 '>
    <h1 className='text-4xl font-bold text-center mb-12'>Some Frequently Asked Questions</h1>
     <div className='flex gap-5 bg-base-100'>
        <div className='flex-1'>
            <img className='w-full' src={faq} alt="" />
        </div>
      <div className=" flex-1 space-y-5">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-2xl font-medium">
            What subjects or topics are covered on EduSmart Website?
          </div>
          <div className="collapse-content">
            <p>
              Our online assignment website covers a wide range of subjects and
              topics, including but not limited to mathematics, science,
              literature, history, computer science, business, and languages. We
              strive to provide resources for students at various academic
              levels, from elementary school to university level, ensuring
              comprehensive coverage of educational needs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-medium">
            How do I submit assignments on EduSmart Website?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Submitting assignments on our platform is simple and
              user-friendly. Once you have logged in to your account, navigate to
              the assignment submission page, where you can either upload your
              completed assignment file directly or enter your response in the
              provided text box. Follow any specific instructions provided by
              your instructor or the assignment guidelines to ensure successful
              submissio
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-2xl font-medium">
            Can I track the progress of my assignments?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can track the progress of your assignments through our
              platform. Upon submission, you will receive a confirmation
              notification, and you can also view the status of your
              assignments, such as pending, in progress, or completed, in your
              account dashboard. Additionally, you may receive feedback from
              your instructor or peers, further enhancing your learning
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Faq;
