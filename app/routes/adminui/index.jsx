import { Message, Heading, Button, Text, Tag } from "@commerce7/admin-ui";

export default function AdminUI() {
  return (
    <div>
      <Heading level={1}>AdminUI</Heading>
      <Message variant="warning">Yo this is a message</Message>
      <Button variant="secondary">Secondary</Button>
      <Button>Primary</Button>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quidem
        assumenda quibusdam, totam, quisquam fuga alias sapiente blanditiis
        fugiat iusto, nihil vel consequuntur ducimus. Provident, iure ut. Nemo,
        blanditiis similique?
      </Text>
      <Tag>Default</Tag>
    </div>
  );
}
