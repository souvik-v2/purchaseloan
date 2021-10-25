<template>
    <Navigation />
    <div id="ltPhoenixApp" class="ltFormAppContainer">
    <div class="Mortgage Purchase">
        <div class="ltFormNavWrapper">
        <form
            id="phoenixform"
            class="ltFormContainer PropertyType PropertyType"
        >
            <div class="ltFormExplain PropertyType"></div>
            <div class="ltEditableFormGroupContainer">
            <div class="ltFormGroup ltRadio PropertyType">
                <div class="ltFormQuestion PropertyType">
                <span>Great! What type of property are you purchasing?</span>
                </div>
                <div class="ltFormGroupContentRadio">
                <div
                    class="
                    ltFormRadioControl
                    ltFormRadioControlSINGLEFAMDET
                    PropertyType
                    "
                >
                    <div
                    class="ltFormRadioControlInner SINGLEFAMDET PropertyType"
                    >
                    <div
                        class="
                        ltFormRadioControlEnumHeader
                        SINGLEFAMDET
                        PropertyType
                        "
                    ></div>
                    <label
                        for="SINGLEFAMDETPropertyType"
                        tabindex="0"
                        :class="{selected: 'SINGLEFAMDET' === this.$store.state.PropertyType}"
                        ><input
                        type="radio"
                        name="PropertyType"
                        id="SINGLEFAMDETPropertyType"
                        class="ltFormRadioButton SINGLEFAMDET PropertyType"
                        for="SINGLEFAMDETPropertyType"
                        value="SINGLEFAMDET"
                        v-model="PropertyType"
                        /><i class="ltFormRadioIcon PropertyType"></i>
                        <div>Single Family Home</div></label
                    >
                    </div>
                </div>
                <div
                    class="
                    ltFormRadioControl
                    ltFormRadioControlSINGLEFAMATT
                    PropertyType
                    "
                >
                    <div
                    class="ltFormRadioControlInner SINGLEFAMATT PropertyType"
                    >
                    <div
                        class="
                        ltFormRadioControlEnumHeader
                        SINGLEFAMATT
                        PropertyType
                        "
                    ></div>
                    <label for="SINGLEFAMATTPropertyType" tabindex="0"
                    :class="{selected: 'SINGLEFAMATT' === this.$store.state.PropertyType}"
                        ><input
                        type="radio"
                        name="PropertyType"
                        id="SINGLEFAMATTPropertyType"
                        class="ltFormRadioButton SINGLEFAMATT PropertyType"
                        for="SINGLEFAMATTPropertyType"
                        value="SINGLEFAMATT"
                        v-model="PropertyType"
                        /><i class="ltFormRadioIcon PropertyType"></i>
                        <div>Townhome</div></label
                    >
                    </div>
                </div>
                <div
                    class="
                    ltFormRadioControl
                    ltFormRadioControlLOWRISECONDO
                    PropertyType
                    "
                >
                    <div
                    class="ltFormRadioControlInner LOWRISECONDO PropertyType"
                    >
                    <div
                        class="
                        ltFormRadioControlEnumHeader
                        LOWRISECONDO
                        PropertyType
                        "
                    ></div>
                    <label for="LOWRISECONDOPropertyType" tabindex="0"
                    :class="{selected: 'LOWRISECONDO' === this.$store.state.PropertyType}"
                        ><input
                        type="radio"
                        name="PropertyType"
                        id="LOWRISECONDOPropertyType"
                        class="ltFormRadioButton LOWRISECONDO PropertyType"
                        for="LOWRISECONDOPropertyType"
                        value="LOWRISECONDO"
                        v-model="PropertyType"
                        /><i class="ltFormRadioIcon PropertyType"></i>
                        <div>Condominium</div></label
                    >
                    </div>
                </div>
                <div
                    class="
                    ltFormRadioControl
                    ltFormRadioControl2TO4UNITFAM
                    PropertyType
                    "
                >
                    <div
                    class="ltFormRadioControlInner 2TO4UNITFAM PropertyType"
                    >
                    <div
                        class="
                        ltFormRadioControlEnumHeader
                        2TO4UNITFAM
                        PropertyType
                        "
                    ></div>
                    <label for="2TO4UNITFAMPropertyType" tabindex="0"
                    :class="{selected: '2TO4UNITFAM' === this.$store.state.PropertyType}"
                        ><input
                        type="radio"
                        name="PropertyType"
                        id="2TO4UNITFAMPropertyType"
                        class="ltFormRadioButton 2TO4UNITFAM PropertyType"
                        for="2TO4UNITFAMPropertyType"
                        value="2TO4UNITFAM"
                        v-model="PropertyType"
                        /><i class="ltFormRadioIcon PropertyType"></i>
                        <div>Multi Family Home</div></label
                    >
                    </div>
                </div>
                <div
                    class="
                    ltFormRadioControl
                    ltFormRadioControlMOBILEPERMANENT
                    PropertyType
                    "
                >
                    <div
                    class="
                        ltFormRadioControlInner
                        MOBILEPERMANENT
                        PropertyType
                    "
                    >
                    <div
                        class="
                        ltFormRadioControlEnumHeader
                        MOBILEPERMANENT
                        PropertyType
                        "
                    ></div>
                    <label for="MOBILEPERMANENTPropertyType" tabindex="0"
                    :class="{selected: 'MOBILEPERMANENT' === this.$store.state.PropertyType}"
                    
                        ><input
                        type="radio"
                        name="PropertyType"
                        id="MOBILEPERMANENTPropertyType"
                        class="ltFormRadioButton MOBILEPERMANENT PropertyType"
                        for="MOBILEPERMANENTPropertyType"
                        value="MOBILEPERMANENT"
                        v-model="PropertyType"
                        /><i class="ltFormRadioIcon PropertyType"></i>
                        <div>Manufactured or Mobile Home</div></label
                    >
                    </div>
                </div>
                <div class="ltFormSubtext PropertyType"></div>
                </div>
            </div>
            </div>
        </form>
        </div>
    </div>
    </div>
</template>

<script>
import Navigation from './Navigation.vue';

export default {
  components: { Navigation },
    name: 'Screen1',
    computed: {
        PropertyType: {
            get() {
                return this.$store.state.PropertyType;
            },
            set(value) {
                this.$store.commit('setPropertyType', {PropertyType: value});
                this.$store.state.counter++;
                this.$router.push('/2');
            }
        }
    }
}
</script>

<style>

</style>