import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import qs from 'qs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function HookForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  const postForm = (d, e) => {
    const formBody = new URLSearchParams(Object.entries(d)).toString();

    axios({
      method: 'post',
      url:
        'https://cors-anywhere-proxy-mm.herokuapp.com/https://jira.bigcommerce.com/rest/collectors/1.0/template/custom/50049bef',
      data: qs.stringify(d),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
      .then(function(res) {
        // handle success
        Swal.fire(
          'Success',
          'Thank you! We have received your request',
          'success'
        );
        e.target.reset();
      })
      .catch(function(error) {
        Swal.fire({
          title: 'Error',
          text:
            'Sorry! There has been an error. Please reach out to DevDocs for help.',
          icon: 'error'
        });
      });
  };

  return (
    <>
      <h1>PoweredBy Documentation Access Request</h1>
      <form onSubmit={handleSubmit(postForm)} className="mt-3">
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
          Subject
        </label>
        <input
          className="text long-field form-control mb-3"
          id="summary"
          name="summary"
          {...register('summary', { required: true })}
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
                    mb-3
                  "
            id="description"
            name="description"
            rows={12}
            {...register('description', { required: true })}
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
          Requester's Name
        </label>
        <input
          type="text"
          name="fullname"
          {...register('fullname', { required: true })}
          className="text form-control mb-3"
          id="fullname"
        />
        <label htmlFor="email" className="form-label">
          Requester's Email
        </label>
        <input
          type="text"
          name="email"
          {...register('email', { required: true })}
          className="text form-control  mb-3"
          id="email"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
}
