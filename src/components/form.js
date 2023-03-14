import React from "react";
import { Box, Button, Label, Input, Textarea, Checkbox } from "theme-ui";

export default function Form() {
  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="name">Name</Label>
      <Input name="name" id="name" mb={3} />
      <Label htmlFor="email">Email</Label>
      <Input type="email" name="email" id="email" mb={3} />
      <Box>
        <Label mb={3}>
          <Checkbox />
          Remember me
        </Label>
      </Box>

      <Label htmlFor="comment">Your Message</Label>
      <Textarea name="comment" id="comment" rows={6} mb={3} />
      <Button>Submit</Button>
    </Box>
  );
}
