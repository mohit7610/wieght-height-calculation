import {Form, FormLayout, TextField, Button} from '@shopify/polaris';
import {useState, useCallback} from 'react';


export default function HomePage() {
  onst [url, setUrl] = useState('');

  const handleSubmit = useCallback((_event) => setUrl(''), []);

  const handleUrlChange = useCallback((value) => setUrl(value), []);
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          value={url}
          onChange={handleUrlChange}
          label="App URL"
          type="url"
          autoComplete="off"
        />
        <Button submit>Submit</Button>
      </FormLayout>
    </Form>
  );
}

