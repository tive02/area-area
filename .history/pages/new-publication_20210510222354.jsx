import React, { useRef } from "react";
import Layout from "../components/Layout/Layout";

import { Editor } from "@tinymce/tinymce-react";

const NewPublication = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <Layout>
      <main>
        <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div class="p-6 bg-white border-b border-gray-200">
                <form method="POST" action="action.php">
                  <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    apiKey="xjhwud0akjjmhfr743jpag1sf4qx71gqiqjwjt0smon3qo40"
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                  <div class="mb-4">
                    <label class="text-xl text-gray-600">Resumen</label>
                    <input
                      type="text"
                      class="border-2 border-gray-300 p-2 w-full"
                      name="description"
                      id="description"
                      placeholder="(Optional)"
                    ></input>
                  </div>

                  <div class="flex p-1">
                    <select
                      class="border-2 border-gray-300 border-r p-2"
                      name="action"
                    >
                      <option>Save and Publish</option>
                      <option>Save Draft</option>
                    </select>
                    <button
                      role="submit"
                      class="p-3 bg-blue-500 text-white hover:bg-blue-400"
                      required
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default NewPublication;
