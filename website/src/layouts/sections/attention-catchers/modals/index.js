/*
=========================================================
* Mohammadreza Sardashti - v2.1.0
=========================================================

* Product Page: /pages/landing-pages/contact-us
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "../../../../layouts/sections/components/BaseLayout";
import View from "../../../../layouts/sections/components/View";

// Modals page components
import SimpleModal from "../../../../layouts/sections/attention-catchers/modals/components/SimpleModal";

// Modals page components code
import simpleModalCode from "../../../../layouts/sections/attention-catchers/modals/components/SimpleModal/code";

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        { label: "Page Sections", route: "../modals" },
        { label: "Modals" },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
