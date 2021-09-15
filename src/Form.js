import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const postForm = d => {
    const formBody = new URLSearchParams(Object.entries(d)).toString();
    console.log(formBody);

    axios
      .post('https://www.hashemian.com/tools/form-post-tester.php/sdrew2322', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <form
      // id="jic-collector-form"
      // className="aui"
      // action="https://jira.bigcommerce.com/rest/collectors/1.0/template/custom/50049bef"
      // method="POST"
      // onSubmit={handleSubmit(d => postform(d))}
      onSubmit={handleSubmit(postForm)}
    >
      <input
        type="hidden"
        title="projectKey"
        defaultValue="DEVDOCS"
        {...register('projectKey')}
      />
      <input type="hidden" {...register('issueType')} defaultValue={3} />
      <input
        type="hidden"
        {...register('customTemplate')}
        defaultValue="true"
      />
      <input
        type="hidden"
        {...register('customLabels')}
        defaultValue='{"name-group":"Name","email-group":"Email"}'
      />
      <input
        type="hidden"
        {...register('fields')}
        defaultValue='["summary","description"]'
      />
      <input
        type="hidden"
        name="atl_token"
        {...register('atl_token')}
        defaultValue="ADJN-9W5M-3CXV-KNJI_61b925042a2eceb053a63fe3a7416a203a266f24_lin"
      />
      <input type="hidden" name="pid" defaultValue={14680} />
      <label htmlFor="summary" className="form-label">
        Summary
      </label>
      <input
        className="text long-field form-control"
        id="summary"
        name="summary"
        {...register('summary')}
        type="text"
        defaultValue="PoweredBy Documentation Access Request"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          backgroundSize: '16px 18px',
          backgroundPosition: '98% 50%'
        }}
      />
      <label htmlFor="description" className="form-label">
        List of email addresses
        <span className="visually-hidden">Required</span>
      </label>

      <div id="description-wiki-edit" className="wiki-edit-content">
        <textarea
          className="
                    textarea
                    long-field
                    wiki-textfield
                    long-field
                    mentionable
                    form-control
                  "
          id="description"
          name="description"
          rows={12}
          {...register('description')}
          wrap="virtual"
          data-projectkey="DEVDOCS"
          style={{ overflowY: 'auto', height: '200px' }}
          defaultValue={''}
        />
        <div className="rte-container">
          <rich-editor
            contentEditable="true"
            data-issue-key="null"
            data-content-present="true"
            tabIndex={-1}
          />
        </div>
        <div className="content-inner" />
      </div>
      <input
        type="hidden"
        {...register('collectorId')}
        defaultValue="50049bef"
      />
      <input
        type="hidden"
        name="pid"
        {...register('pid')}
        defaultValue={14680}
      />
      <input
        type="hidden"
        name="atl_token"
        {...register('atl_token')}
        defaultValue="ADJN-9W5M-3CXV-KNJI_61b925042a2eceb053a63fe3a7416a203a266f24_lin"
      />
      <label htmlFor="fullname" className="form-label">
        Requestor's Name
      </label>
      <input
        type="text"
        name="fullname"
        {...register('fullname')}
        className="text form-control"
        id="fullname"
      />
      <label htmlFor="email" className="form-label">
        Requestor's Email
      </label>
      <input
        type="text"
        name="email"
        {...register('email')}
        className="text form-control"
        id="email"
      />
      <input type="submit" className="btn btn-primary" />
    </form>
  );
}
