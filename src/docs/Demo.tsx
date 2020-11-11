import React from "react";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Container,
  Section,
  CodeBlock,
  KeyboardCmd,
  InlineCode,
  Link,
  Highlight,
  Blockquote,
  Divider,
  Button,
  ButtonInput,
  GridRow,
  GridCell,
  GlobalStyle,
} from "Primitive";

export default function Demo() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Container size="medium">
          <H1>HTML5 Element Test Page</H1>
          <p>Common HTML5 elements for CSS testing purposes.</p>

          <H1>Formatting</H1>

          <p>
            This sentence is <b>bold</b>. If you like semantics, you might go with <strong>strong</strong> or{" "}
            <em>emphasized</em> text. If not, <i>italic</i> is still around. <small>Small</small> text is for fine
            print. Your copy can also be <sub>subscripted</sub> and <sup>superscripted</sup>, <ins>inserted</ins>,
            <del>deleted</del>, or <Highlight>highlighted</Highlight>. You would use a <Link href="#!">hyperlink</Link>{" "}
            to go to a new page.
          </p>
          <p>
            If you like to write about there are plenty of semantic tags for you. There's the generic{" "}
            <InlineCode>code</InlineCode>, as well as <KeyboardCmd>keyboard input</KeyboardCmd>,{" "}
            <samp>computer output</samp>, and <var>variables</var>.
          </p>
          <p>
            You might have need of a <cite>citation</cite>, <q>short quotation</q>,<abbr>abbreviation</abbr>, or{" "}
            <dfn>definition</dfn>. It might be <time>10:00pm</time>.
          </p>
          <address>
            <p>
              123 Fake Street <br />
              Springfield, USA
            </p>
          </address>

          <Section>
            <H2>Blockquote</H2>

            <Blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam molestiae et assumenda molestias alias
              ut saepe doloribus, porro, deleniti neque, harum minus, commodi laudantium quod excepturi nam corrupti
              odit provident.
              <cite>- Blockquote Citation</cite>
            </Blockquote>
          </Section>

          <H2>Preformatted Text</H2>
          <CodeBlock>
            {`class Voila {
public:
  // Voila
  static const string VOILA = "Voila";
}`}
          </CodeBlock>
          <H2>Horizontal Line</H2>

          <Divider />

          <H1>Headings</H1>

          <H1>First Heading H1</H1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea delectus cupiditate minima, magni possimus
            commodi, eveniet? Rem, adipisci architecto pariatur libero aliquid culpa sunt accusantium. Ipsa error
            aliquid et! Animi.
          </p>
          <H2>Second Heading H2</H2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia molestias ullam quasi est a nemo,
            accusamus voluptatum autem. Eius explicabo est assumenda voluptatem id, hic maxime mollitia facere debitis
            quos.
          </p>
          <H3>Third Heading H3</H3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo deleniti, repudiandae rerum nam laborum
            eligendi aperiam. Autem id, ad necessitatibus accusantium, facilis, quae ullam est, voluptates debitis
            fugiat quos inventore!
          </p>
          <H4>Fourth Heading H4</H4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque cum eum eligendi voluptatum quasi nisi
            doloremque ipsam unde, laboriosam nihil voluptatem consequatur quam non similique vero ratione animi sit
            veritatis.
          </p>
          <H5>Fifth Heading H5</H5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptatem necessitatibus eos iusto nam
            deserunt, dicta possimus error qui reiciendis, aut dolore magnam eligendi maiores expedita commodi
            perferendis non blanditiis.
          </p>

          <Section>
            <H1>Grids</H1>

            <GridRow>
              <GridCell>Large 1</GridCell>
              <GridCell>Large 2</GridCell>
            </GridRow>

            <GridRow>
              <GridCell size="oneThird">1/3</GridCell>
              <GridCell size="twoThirds">2/3</GridCell>
            </GridRow>

            <GridRow>
              <GridCell breakpoint="small">Small 1</GridCell>
              <GridCell breakpoint="small">Small 2</GridCell>
            </GridRow>
          </Section>

          <H1>Lists</H1>

          <H2>Unordered list</H2>

          <ul>
            <li>
              List item one
              <ul>
                <li>Nested list item</li>
              </ul>
            </li>
            <li>List item two</li>
            <li>List item three</li>
          </ul>

          <H2>Ordered list</H2>

          <ol>
            <li>
              List item one
              <ol>
                <li>Nested list item</li>
              </ol>
            </li>
            <li>List item two</li>
            <li>List item three</li>
          </ol>
          <H2>Definition List</H2>
          <dl>
            <dt>Definition Title One</dt>
            <dd>First definition description</dd>
            <dt>Definition Title Two</dt>
            <dd>Second definition description</dd>
          </dl>

          <H1>Tables</H1>

          <table>
            <thead>
              <tr>
                <th>Head 1</th>
                <th>Head 2</th>
                <th>Head 3</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Footer 1</th>
                <th>Footer 2</th>
                <th>Footer 3</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Description 1</td>
                <td>Description 2</td>
                <td>Description 3</td>
              </tr>
              <tr>
                <td>Description 1</td>
                <td>Description 2</td>
                <td>Description 3</td>
              </tr>
              <tr>
                <td>Description 1</td>
                <td>Description 2</td>
                <td>Description 3</td>
              </tr>
            </tbody>
          </table>

          <H1>Forms</H1>

          <form>
            <label htmlFor="text">Text Input</label>
            <input id="text" type="text" placeholder="Text Input" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" />
            <label htmlFor="url">URL</label>
            <input id="url" type="url" placeholder="http://www.example.com" />
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="email@example.com" />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="123-123-1234" />
            <label htmlFor="search">Search</label>
            <input id="search" type="search" placeholder="Search" />
            <label htmlFor="number">Number</label>
            <input id="number" type="number" placeholder="Number" />
            <label htmlFor="select">Select</label>
            <select id="select">
              <option>Option One</option>
              <option>Option Two</option>
              <option>Option Three</option>
            </select>
            <label htmlFor="checkbox1">
              <input id="checkbox1" name="checkbox" type="checkbox" defaultChecked /> Choice A
            </label>
            <label htmlFor="checkbox2">
              <input id="checkbox2" name="checkbox" type="checkbox" /> Choice B
            </label>
            <label htmlFor="radio1">
              <input id="radio1" name="radio" type="radio" className="radio" defaultChecked /> Option 1
            </label>
            <label htmlFor="radio2">
              <input id="radio2" name="radio" type="radio" className="radio" /> Option 2
            </label>
            <label htmlFor="textarea">Textarea</label>
            <textarea id="textarea" rows={5} cols={30} placeholder="Message"></textarea>
            <ButtonInput type="button" value="Button" primary round />
            <ButtonInput type="submit" value="Submit" muted />
            <ButtonInput type="reset" value="Reset" />
            <Button square>Button element</Button>
            <Button full>Button element</Button>
          </form>

          <H2>Fieldset and Legend</H2>

          <form>
            <fieldset>
              <legend>Legend</legend>
              <label htmlFor="text">Text Input</label>
              <input id="text" type="text" placeholder="Text Input" />
              <input type="submit" value="Submit" />
            </fieldset>
          </form>

          <footer>
            <p>
              Made to test
              <Link href="https://taniarascia.github.io/primitive/" target="_blank">
                Primitive
              </Link>{" "}
              by
              <Link href="https://www.taniarascia.com">Tania Rascia</Link>.
            </p>
          </footer>
        </Container>
      </main>
    </>
  );
}
